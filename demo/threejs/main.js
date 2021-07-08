// 初始化
function init() {
  /**
   * 创建场景对象Scene
   */
  scene = new THREE.Scene();
  /**
   * 相机设置
   */
  width = window.innerWidth; //窗口宽度
  height = window.innerHeight; //窗口高度
  var k = width / height; //窗口宽高比
  var s = 400; //三维场景显示范围控制系数，系数越大，显示的范围越大
  //创建相机对象
  camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
  // camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 2000);
  scene.add(camera);
  camera.position.set(276, 137, 274); //设置相机位置
  camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
  // 光源设置
  var point = new THREE.PointLight(0xffffff);
  point.position.set(400, 200, 300); //点光源位置
  scene.add(point); //点光源添加到场景中
  // //环境光
  var ambient = new THREE.AmbientLight(0xffffff);
  scene.add(ambient);
}

// 渲染
function initRender() {
  // webgl 渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true });
  // 设置渲染区域尺寸
  renderer.setSize(width, height);
  // 设置背景颜色
  renderer.setClearColor(0xffffff, 1);
  document.body.appendChild(renderer.domElement);

  // 设置鼠标操作
  controls = new THREE.OrbitControls(camera, renderer.domElement); // 创建控件对象
  controls.enableZoom = true; // 允许缩放
  
  // 渲染
  function render() {
    requestAnimationFrame(render);
    divRender();
    renderer.render(scene, camera);
  }
  render();
}

// 添加几何体
function addBox(options) {
  // 创建长方体 参数：长，宽，高
  var geometry = new THREE.BoxGeometry(options.size[0], options.size[1], options.size[2]);
  if (options.textture) {
    var texture = new THREE.TextureLoader().load(options.textture);
    options.params.map = texture;
    options.params.side = THREE.DoubleSide;
  }
  // 给该平面设定材质 参数： 颜色， 透明度， 透明是否开启
  var material = new THREE.MeshLambertMaterial(options.params);
  //材质对象Material
  var mesh = new THREE.Mesh(geometry, material);
  // 设定位置
  if (options.position) {
    mesh.position.set(options.position.x, options.position.y, options.position.z);
  }
  if (options.userData) {
    mesh.userData = options.userData;
  }
  // 网格模型添加到场景中
  scene.add(mesh);
}

// 添加圆柱体
function addCylinder(options) {
  // 创建圆柱体 参数：顶部半径， 底部半径， 高度, 圆的分段数
  var geometry = new THREE.CylinderGeometry(options.size[0], options.size[1], options.size[2], options.size[3]);
  var materials = null;
  // 给该平面设定材质 参数： 颜色， 透明度， 透明是否开启
  var material = new THREE.MeshLambertMaterial(options.params);
  if (options.textture) {
    var textture = new THREE.TextureLoader().load(options.textture);
    texttureMaterial = new THREE.MeshLambertMaterial({
      map: textture,
    });
    materials = [];
    materials.push(material); // 侧边
    materials.push(texttureMaterial); // 顶
    materials.push(material); // 底
  }
  //材质对象Material
  var mesh = new THREE.Mesh(geometry, materials || material);
  // 设定位置
  if (options.position) {
    mesh.position.set(options.position.x, options.position.y, options.position.z);
  }
  if (options.userData) {
    mesh.userData = options.userData;
  }
  // 网格模型添加到场景中
  scene.add(mesh);
}

// 添加连线
function addLine(position) {
  var material = new THREE.LineDashedMaterial({ color: 0x000000 });
  var geometry = new THREE.BufferGeometry();
  var pointsArray = [];
  pointsArray.push(new THREE.Vector3(position.x, position.y, position.z));
  pointsArray.push(new THREE.Vector3(position.x + 50, position.y + 110, position.z));
  pointsArray.push(new THREE.Vector3(position.x + 100, position.y + 110, position.z));
  geometry.setFromPoints(pointsArray);
  var line = new THREE.Line(geometry, material);
  scene.add(line);
}

// 添加html模板
function addInfo({ id, name, position, normal, total}){
  if (!id) {
    return;
  }
  var html = [
    '<div class="title">' + name + '</div>',
    '<div class="info">',
    '<div class="name">健康值</div>',
    '<div class="value">',
    normal + '/' + total,
    '</div>',
    '</div>',
  ].join('');
  var divEl = document.getElementById(id);
  if (!divEl) {
    divEl = document.createElement('div');
    divEl.id = id;
    divEl.name = 'info';
    divEl.className = 'label';
    divEl.innerHTML = html;
    divEl.position = position;
    document.body.append(divEl);
    divEls.push(divEl);
    // 添加连线
    addLine(position);
  }
  divEl.innerHTML = html;
  var pos = transPosition(position);
  divEl.style.left = pos.x + 'px';
  divEl.style.top = pos.y + 'px';
}

// 鼠标按键监听
function mouseDownFuc(e) {
  var raycaster = new THREE.Raycaster(); //光线投射，用于确定鼠标点击位置
  var mouse = new THREE.Vector2(); //创建二维平面
  var intersects = getSelsectOBj(mouse, raycaster, e);
  if (intersects.length > 0) {
    const current = intersects[0].object;
    if (current.userData) {
      addInfo({
        id: current.userData.id,
        name: current.userData.name,
        position: current.position,
        normal: 3,
        total: 3,
      });
    }
  }
}

//获取事件操作对象
function getSelsectOBj(mouse, raycaster, e) {
  //将html坐标系转化为webgl坐标系，并确定鼠标点击位置
  mouse.x = e.clientX / renderer.domElement.clientWidth * 2 - 1;
  mouse.y = -(e.clientY / renderer.domElement.clientHeight * 2) + 1;
  //以camera为z坐标，确定所点击物体的3D空间位置
  raycaster.setFromCamera(mouse, camera);
  //确定所点击位置上的物体数量
  var intersects = raycaster.intersectObjects(scene.children, true);
  return intersects;
}

// 坐标点转换
function transPosition(position) {
  var world_vector = new THREE.Vector3(position.x + 100, position.y + 150, position.z);
  var vector = world_vector.project(camera);
  var halfWidth = window.innerWidth / 2,
    halfHeight = window.innerHeight / 2;
  return {
    x: Math.round(vector.x * halfWidth + halfWidth),
    y: Math.round(-vector.y * halfHeight + halfHeight)
  };
}
// div重新绘制
function divRender() {
  if (divEls.length > 0) {
    divEls.forEach(function(el) {
      var pos = transPosition(el.position);
      el.style.left = pos.x + 'px';
      el.style.top = pos.y + 'px';
    });
  }
}