
/*
  map.on('complete', function(){
    map.plugin(["AMap.ToolBar", "AMap.OverView", "AMap.Scale"], function(){
      map.addControl(new AMap.ToolBar({
        ruler: true, 
        direction: true, 
        locate: false
      })); 
      map.addControl(new AMap.OverView({
        isOpen: true
      })); 
      map.addControl(new AMap.Scale);
    });	
  })
*/

AMapLoader.load({
  key: "465bf7a3737e752f46aa67cc437980e2", 
  version: "2.0",
})
.then((AMap) => {
  const map = new AMap.Map("map-container", {
    center: [121.434094, 31.188401], 
    zoom: 17, 
    keyboardEnable:true, 
    dragEnable:true, 
    scrollWheel:true, 
    doubleClickZoom:true,
  });
  map.on('complete', function(){
    map.plugin(["AMap.ToolBar", "AMap.Scale"], function(){
      map.addControl(new AMap.ToolBar({
        ruler: true, 
        direction: true, 
        locate: false
      })); 
      map.addControl(new AMap.Scale);
    });
    const icon = new AMap.Icon({
      size: new AMap.Size(20, 40), //图标尺寸
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJGqT0HDLXHD_50fJy13iAsnzGUCuvV5Hbw&usqp=CAU", //Icon 的图像
      imageOffset: new AMap.Pixel(-17, -17), 
      imageSize: new AMap.Size(60, 70),
    });
    const marker = new AMap.Marker({
      position: [121.43388, 31.1884],
      title: '上海天文台',
      zIndex: 100,
      icon: icon,
      zoom: [2, 20],
    });
    map.add(marker);
  })
})
.catch((e) => {
  console.error(e);
});