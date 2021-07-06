// 添加地板
function addFloor() {
  // 添加第一层平面
  addBox({
    name: '第一层',
    size: [500, 5, 500],
    params: {
      color: 0x6593ce,
      opacity: 0.8,
      transparent: true
    }
  });
  // 添加第二层平面
  addBox({
    name: '第二层',
    size: [500, 5, 500],
    position: {
      x: 0,
      y: 200,
      z: 0
    },
    params: {
      color: 0x6593ce,
      opacity: 0.8,
      transparent: true
    }
  });
  // 添加第三层平面
  addBox({
    name: '第三层',
    size: [500, 5, 500],
    position: {
      x: 0,
      y: -200,
      z: 0
    },
    params: {
      color: 0x6593ce,
      opacity: 0.8,
      transparent: true
    }
  });
}
// 添加第一层的设备
function addFirst() {
  // 添加四个路由
  addCylinder({
    name: '第一个路由',
    size: [40, 40, 20, 40],
    position: {
      x: 100,
      y: 210,
      z: 100
    },
    textture: './images/route.png',
    params: {
      color: 0x6593ce
    }
  });
  addCylinder({
    name: '第二个路由',
    size: [40, 40, 20, 40],
    position: {
      x: -100,
      y: 210,
      z: -100
    },
    textture: './images/route.png',
    params: {
      color: 0x6593ce
    }
  });
  addCylinder({
    name: '第三个路由',
    size: [40, 40, 20, 40],
    position: {
      x: 100,
      y: 210,
      z: -100
    },
    textture: './images/route.png',
    params: {
      color: 0x6593ce
    }
  });
  addCylinder({
    name: '第四个路由',
    size: [40, 40, 20, 40],
    position: {
      x: -100,
      y: 210,
      z: 100
    },
    textture: './images/route.png',
    params: {
      color: 0x6593ce
    }
  });
  // 添加一个防火墙
  addBox({
    name: '防火墙',
    size: [400, 105, 20],
    position: {
      x: 0,
      y: 250,
      z: 0
    },
    textture: './images/firewall.jpeg',
    params: {}
  });
}

function addSecond() {
  // 添加一个服务器
  addBox({
    name: '第一个服务器',
    size: [200, 40, 50],
    position: {
      x: 0,
      y: 20,
      z: 100
    },
    params: {
      color: 0x000000,
    }
  });
  addBox({
    name: '第二个服务器',
    size: [200, 40, 50],
    position: {
      x: 0,
      y: 20,
      z: -100
    },
    params: {
      color: 0x000000,
    }
  });
}