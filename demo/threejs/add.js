// 添加地板
function addFloor() {
  // 添加第一层平面
  addBox({
    size: [500, 5, 500],
    params: {
      color: 0x6593ce,
      opacity: 0.8,
      transparent: true
    }
  });
  // 添加第二层平面
  addBox({
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
    size: [40, 40, 20, 40],
    position: {
      x: 100,
      y: 220,
      z: 100
    },
    textture: './images/route.png',
    params: {
      color: 0x6593ce
    }
  });
  addCylinder({
    size: [40, 40, 20, 40],
    position: {
      x: -100,
      y: 220,
      z: -100
    },
    textture: './images/route.png',
    params: {
      color: 0x6593ce
    }
  });
  addCylinder({
    size: [40, 40, 20, 40],
    position: {
      x: 100,
      y: 220,
      z: -100
    },
    textture: './images/route.png',
    params: {
      color: 0x6593ce
    }
  });
  addCylinder({
    size: [40, 40, 20, 40],
    position: {
      x: -100,
      y: 220,
      z: 100
    },
    textture: './images/route.png',
    params: {
      color: 0x6593ce
    }
  });
  // 添加一个防火墙
  addBox({
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