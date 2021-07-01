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
function render() {
  /**
     * 创建渲染器对象
     */
  var renderer = new THREE.WebGLRenderer();
  // 设置渲染区域尺寸
  renderer.setSize(width, height);
  // 设置背景颜色
  renderer.setClearColor(0xffffff, 1);
  // body元素中插入canvas对象
  document.body.appendChild(renderer.domElement);
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
  // 设置鼠标操作
  var controls = new THREE.OrbitControls(camera, renderer.domElement); //创建控件对象
  controls.addEventListener('change', function() {
    renderer.render(scene, camera);
  }); //监听鼠标、键盘事件
}

// 添加几何体
function addBox(options) {
  // 创建长方体 参数：长，宽，高
  var geometry  = new THREE.BoxGeometry(options.size[0], options.size[1], options.size[2]);
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
    texttureMaterial = new THREE.MeshLambertMaterial({ map: textture });
    materials = [];
    materials.push(material);
    materials.push(texttureMaterial);
  }
  //材质对象Material
  var mesh = new THREE.Mesh(geometry, materials || material);
  // 设定位置
  if (options.position) {
    mesh.position.set(options.position.x, options.position.y, options.position.z);
  }
  // 网格模型添加到场景中
  scene.add(mesh);
}

