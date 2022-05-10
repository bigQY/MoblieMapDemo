/* -------------------------------------------------------------------
  百度地图SDK v3 API：http://lbsyun.baidu.com/index.php?title=jspopular3.0
------------------------------------------------------------------- */

// /// <reference path='https://api.map.baidu.com/api?v=3.0&ak=da1K4Mxg4LItgEhMy5h8k3ZbXzLzFb2I'/>
// /// <reference path='https://api.map.baidu.com/getscript?v=3.0&ak=da1K4Mxg4LItgEhMy5h8k3ZbXzLzFb2I&services=&t=20220328195528'/>


declare namespace BMap {
    //declare namespace BMap {

    //#region 核心类

    class Map {
        /**在指定的容器内创建地图实例，之后需要调用Map.centerAndZoom()方法对地图进行初始化。未进行初始化的地图将不能进行任何操作 */
        constructor(container: string | HTMLElement, opts?: MapOptions)

        /** 启用地图拖拽，默认启用 */
        enableDragging(): void;
        /** 禁用地图拖拽 */
        disableDragging(): void;
        /** 启用滚轮放大缩小，默认禁用 */
        enableScrollWheelZoom(): void;
        /** 禁用滚轮放大缩小 */
        disableScrollWheelZoom(): void;
        /** 启用双击放大，默认启用 */
        enableDoubleClickZoom(): void;
        /** 禁用双击放大，默认启用 */
        disableDoubleClickZoom(): void;
        /** 启用键盘操作，默认禁用。键盘的上、下、左、右键可连续移动地图。同时按下其中两个键可使地图进行对角移动。PgUp、PgDn、Home和End键会使地图平移其1/2的大小。+、-键会使地图放大或缩小一级 */
        enableKeyboard(): void;
        /**禁用键盘操作 */
        disableKeyboard(): void;
        /**启用地图惯性拖拽，默认禁用 */
        enableInertialDragging(): void;
        /**禁用地图惯性拖拽 */
        disableInertialDragging(): void;
        /**启用连续缩放效果，默认禁用 */
        enableContinuousZoom(): void;
        /**禁用连续缩放效果 */
        disableContinuousZoom(): void;
        /**启用双指操作缩放，默认启用 */
        enablePinchToZoom(): void;
        /**禁用双指操作缩放 */
        disablePinchToZoom(): void;
        /**启用自动适应容器尺寸变化，默认启用 */
        enableAutoResize(): void;
        /**禁用自动适应容器尺寸变化 */
        disableAutoResize(): void;
        /**设置地图默认的鼠标指针样式。参数cursor应符合CSS的cursor属性规范 */
        setDefaultCursor(cursor: string): void;
        /**返回地图默认的鼠标指针样式 */
        getDefaultCursor(): string;
        /**设置拖拽地图时的鼠标指针样式。参数cursor应符合CSS的cursor属性规范 */
        setDraggingCursor(cursor: string): void;
        /**返回拖拽地图时的鼠标指针样式 */
        getDraggingCursor(): string;
        /**设置地图允许的最小级别。取值不得小于地图类型所允许的最小级别 */
        setMinZoom(zoom: number): void;
        /**设置地图允许的最大级别。取值不得大于地图类型所允许的最大级别 */
        setMaxZoom(zoom: number): void;
        /**设置地图样式，样式包括地图底图颜色和地图要素是否展示两部分 */
        setMapStyle(): void;
        /**将全景实例与Map类进行绑定 */
        setPanorama(pano: Panorama): void;
        /**返回地图可视区域，以地理坐标表示 */
        getBounds(): Bounds;
        /**返回地图当前中心点 */
        getCenter(): Point;
        /**返回两点之间的距离，单位是米 */
        getDistance(start: Point, end: Point): number;
        /**返回地图类型 */
        getMapType(): MapType;
        /**返回地图视图的大小，以像素表示 */
        getSize(): Size;
        /**根据提供的地理区域或坐标获得最佳的地图视野，返回的对象中包含center和zoom属性，分别表示地图的中心点和级别。此方法仅返回视野信息，不会将新的中心点和级别做用到当前地图上 */
        getViewport(view: Point[], viewportOptions: ViewportOptions): Viewport;
        /**返回地图当前缩放级别 */
        getZoom(): number;
        /**获取与Map类绑定的全景实例 */
        getPanorama(): Panorama;
        /**设初始化地图。 如果center类型为Point时，zoom必须赋值，范围3-19级，若调用高清底图（针对移动端开发）时，zoom可赋值范围为3-18级。如果center类型为字符串时，比如“北京”，zoom可以忽略，地图将自动根据center适配最佳zoom级别 */
        centerAndZoom(center: Point, zoom: number): void;
        /**将地图的中心点更改为给定的点。如果该点在当前的地图视图中已经可见，则会以平滑动画的方式移动到中心点位置。可以通过配置强制移动过程不使用动画效果 */
        panTo(center: Point, opts?: PanOptions): void;
        /**将地图在水平位置上移动x像素，垂直位置上移动y像素。如果指定的像素大于可视区域范围或者在配置中指定没有动画效果，则不执行滑动效果 */
        panBy(x: number, y: number, opts?: PanOptions): void;
        /**重新设置地图，恢复地图初始化时的中心点和级别 */
        reset(): void;
        /**设置地图中心点。center除了可以为坐标点以外，还支持城市名 */
        setCenter(center: Point | string): void;
        /**设置地图城市，注意当地图初始化时的类型设置为BMAP_PERSPECTIVE_MAP时，需要在调用centerAndZoom之前调用此方法设置地图所在城市。例如： var map = new BMap.Map(“container”, {mapType: BMAP_PERSPECTIVE_MAP}); map.setCurrentCity(“北京市”); map.centerAndZoom(new BMap.Point(116.404, 39.915), 18); 注意：初始化的坐标应与您设置的城市对应，否则地图将无法正常显示。如果地图初始化为BMAP_NORMAL_MAP类型，则在调用setMapType切换地图类型时也要调用此方法 */
        setCurrentCity(city: string): void;
        /**设置地图类型。
         * 注意，当设置地图类型为BMAP_PERSPECTIVE_MAP时，需要调用map.setCurrentCity方法设置城市。
         * 【官网的原参数类型MapTypes有错】 */
        setMapType(mapType: MapTypeEnum): void;
        /**根据提供的地理区域或坐标设置地图视野，调整后的视野会保证包含提供的地理区域或坐标 */
        setViewport(view: Point[] | Viewport, viewportOptions?: ViewportOptions): void;
        /**将视图切换到指定的缩放等级，中心点坐标不变。注意：当有信息窗口在地图上打开时，地图缩放将保证信息窗口所在的坐标位置不动 */
        setZoom(zoom: number): void;
        /**是否使用高分辨率底图。仅当mapOptions.enableHighResolution属性为true且设备支持高分辨率时返回true */
        highResolutionEnabled(): boolean;
        /**放大一级视图 */
        zoomIn(): void;
        /**缩小一级视图 */
        zoomOut(): void;
        /**为地图添加热区 */
        addHotspot(hotspot: Hotspot): void;
        /**移除某个地图热区 */
        removeHotspot(hotspot: Hotspot): void;
        /**清空地图所有热区 */
        clearHotspots(): void;
        /**将控件添加到地图，一个控件实例只能向地图中添加一次 */
        addControl(control: Control): void;
        /**从地图中移除控件。如果控件从未被添加到地图中，则该移除不起任何作用 */
        removeControl(control: Control): void;
        /**返回地图的容器元素。当创建用户自定义控件时，需要自行实现Control.initialize()方法，并将控件的容器元素添加到地图上，通过此方法可获得地图容器 */
        getContainer(): HTMLElement;
        /**添加右键菜单 */
        addContextMenu(menu: ContextMenu): void;
        /**移除右键菜单 */
        removeContextMenu(menu: ContextMenu): void;

        /**将覆盖物添加到地图中，一个覆盖物实例只能向地图中添加一次 */
        addOverlay(overlay: Overlay): void;
        /**从地图中移除覆盖物。如果覆盖物从未被添加到地图中，则该移除不起任何作用 */
        removeOverlay(overlay: Overlay): void;
        /**清除地图上所有覆盖物 */
        clearOverlays(): void;

        /**在地图上打开信息窗口 */
        openInfoWindow(infoWnd: InfoWindow, point: Point): void;
        /**关闭在地图上打开的信息窗口。在标注上打开的信息窗口也可通过此方法进行关闭 */
        closeInfoWindow(): void;
        /**根据地理坐标获取对应的覆盖物容器的坐标，此方法用于自定义覆盖物 */
        pointToOverlayPixel(point: Point): Pixel;
        /**根据覆盖物容器的坐标获取对应的地理坐标 */
        overlayPixelToPoint(pixel: Pixel): Point;
        /**返回地图上处于打开状态的信息窗的实例。当地图没有打开的信息窗口时，此方法返回null */
        getInfoWindow(): InfoWindow | null;
        /**返回地图上的所有覆盖物 */
        getOverlays(): Overlay[];
        /**返回地图覆盖物容器列表 */
        getPanes(): MapPanes;
        /**添加一个自定义地图图层 */
        addTileLayer(tileLayer: TileLayer): void;
        /**移除一个自定义地图图层 */
        removeTileLayer(tileLayer: TileLayer): void;
        /**通过地图类型得到一个地图图层对象 */
        getTileLayer(mapType: string): TileLayer;
        /**像素坐标转换为经纬度坐标 */
        pixelToPoint(pixel: Pixel): Point;
        /**经纬度坐标转换为像素坐标 */
        pointToPixel(point: Point): Pixel;

        addEventListener(eventName: string, eventHandler: (e: MapEvent) => void): void;
        removeEventListener(eventName: string, eventHandler: (e: MapEvent) => void): void;

        /**左键单击地图时触发此事件。 当双击时，产生的事件序列为： click click dblclick */
        click: (event?: { type: MapType, target: Map, point: Point, pixel: Pixel, overlay: Overlay }) => void;
        /**鼠标双击地图时触发此事件。 */
        dblclick: (event?: { type, target, point, pixel, overlay }) => void;
        /**右键单击地图时触发此事件。。 当双击时，产生的事件序列为： click click dblclick */
        rightclick: (event?: { type, target, point, pixel, overlay }) => void;
        /**右键双击地图时触发此事件。 */
        rightdblclick: (event?: { type, target, point, pixel, overlay }) => void;
        /**地图类型发生变化时触发此事件。 */
        maptypechange: (event?: { type, target }) => void;
        /**鼠标在地图区域移动过程中触发此事件。 */
        mousemove: (event?: { type, target, point, pixel, overlay }) => void;
        /**鼠标移入地图区域时触发此事件。 */
        mouseover: (event?: { type, target }) => void;
        /**鼠标移出地图区域时触发此事件。 */
        mouseout: (event?: { type, target }) => void;
        /**地图移动开始时触发此事件。 */
        movestart: (event?: { type, target }) => void;
        /**地图移动过程中触发此事件。 */
        moving: (event?: { type, target }) => void;
        /**地图移动结束时触发此事件。 */
        moveend: (event?: { type, target }) => void;
        /**地图更改缩放级别开始时触发触发此事件。 */
        zoomstart: (event?: { type, target }) => void;
        /**地图更改缩放级别结束时触发触发此事件。 */
        zoomend: (event?: { type, target }) => void;
        /**当使用Map.addControl()方法向地图中添加单个控件时会触发此事件。 */
        addcontrol: (event?: { type, target }) => void;
        /**当使用Map.removeControl()方法移除单个控件时会触发此事件。 */
        removecontrol: (event?: { type, target }) => void;
        /**当使用Map.addOverlay()方法向地图中添加单个覆盖物时会触发此事件。 */
        addoverlay: (event?: { type: Overlay, target: Overlay }) => void;
        /**当使用Map.removeOverlay()方法移除单个覆盖物时会触发此事件。 */
        removeoverlay: (event?: { type, target }) => void;
        /**当使用Map.clearOverlays()方法一次性移除全部覆盖物时会触发此事件。 */
        clearoverlays: (event?: { type, target }) => void;
        /**开始拖拽地图时触发 */
        dragstart: (event?: { type, target, pixel, point }) => void;
        /**拖拽地图过程中触发 */
        dragging: (event?: { type, target, pixel, point }) => void;
        /**停止拖拽地图时触发 */
        dragend: (event?: { type, target, pixel, point }) => void;
        /**添加一个自定义地图图层时触发此事件。 */
        addtilelayer: (event: { type, target }) => void;
        /**移除一个自定义地图图层时触发此事件。 */
        removetilelayer: (event?: { type, target }) => void;
        /**调用Map.centerAndZoom()方法时会触发此事件。这表示位置、缩放层级已经确定，但可能还在载入地图图块 */
        load: (event?: { type, target, pixel, point, zoom }) => void;
        /**地图可视区域大小发生变化时会触发此事件 */
        resize: (event?: { type, target, size }) => void;
        /**点击热区时触发此事件 */
        hotspotclick: (event?: { type, target, spots }) => void;
        /**鼠标移至热区时触发此事件 */
        hotspotover: (event?: { type, target, spots }) => void;
        /**鼠标移出热区时触发此事件 */
        hotspotout: (event?: { type, target, spots }) => void;
        /**当地图所有图块完成加载时触发此事件 */
        tilesloaded: (event?: { type, target }) => void;
        /**触摸开始时触发此事件，仅适用移动设备 */
        touchstart: (event?: { type, target, point, pixel }) => void;
        /**触摸移动时触发此事件，仅适用移动设备 */
        touchmove: (event?: { type, target, point, pixel }) => void;
        /**触摸结束时触发此事件，仅适用移动设备 */
        touchend: (event?: { type, target, point, pixel }) => void;
        /**长按事件，仅适用移动设备 */
        longpress: (event?: { type, target, point, pixel }) => void;
    }

    interface MapEvent {
        type?: MapType;
        target?: Map;
        point?: Point;
        pixel?: Pixel;
        //overlay?: Overlay;
        //zoom?: number;
        //size?: Size;
    }

    /**此类表示Map构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。*/
    interface MapOptions {
        /**地图允许展示的最小级别 */
        minZoom?: number;
        /**地图允许展示的最大级别 */
        maxZoom?: number;
        /**地图类型，默认为BMAP_NORMAL_MAP */
        mapType?: MapType;
        /**是否启用使用高分辨率地图。在iPhone4及其后续设备上，可以通过开启此选项获取更高分辨率的底图，v1.2,v1.3版本默认不开启，v1.4默认为开启状态 */
        enableHighResolution?: boolean;
        /**是否自动适应地图容器变化，默认启用 */
        enableAutoResize?: boolean;
        /**是否开启底图可点功能，默认启用 */
        enableMapClick?: boolean;
    }

    /**此类是panBy和panTo方法的可选参数，没有构造函数，通过对象字面量形式表示。 */
    interface PanOptions {
        /**是否在平移过程中禁止动画 */
        noAnimation: boolean;
    }

    /**此类代表视野，不可实例化，通过对象字面量形式表示。 */
    interface Viewport {
        /**视野中心点 */
        center?: Point;
        /**视野级别 */
        zoom?: number;
    }

    /**此类作为map.getViewport与map.setViewport方法的可选参数，不可实例化。 */
    interface ViewportOptions {
        /**是否启用动画效果移动地图，默认为true。当调整后的级别与当前地图级别一致时，将使用动画效果移动地图 */
        enableAnimation?: boolean;
        /**视野调整的预留边距，例如： margins: [30, 20, 0, 20] 表示坐标点会限制在上述区域内 */
        margins?: Array<number>;
        /**地图级别的偏移量，您可以在方法得出的结果上增加一个偏移值。例如map.setViewport计算出地图的级别为10，如果zoomFactor为 - 1，则最终的地图级别为9 */
        zoomFactor?: number;
        /**改变地图视野的延迟执行时间，单位毫秒，默认为200ms。此延时仅针对动画效果有效 */
        delay?: number;
    }

    /**该类用于设置地图样式，使用对象字面量形式表示，不可实例化。 */
    interface MapStyle {
        /**设置地图上展示的元素种类，支持point（兴趣点）、road（道路）、water（河流）、land（陆地）、building（建筑物） */
        features?: any[];
        /**设置地图底图样式，目前支持normal（默认样式）, dark（深色样式）, light（浅色样式）三种 */
        style?: string;
    }

    //#endregion //核心类

    //#region 基础类

    /**此类表示一个地理坐标点。 */
    class Point {
        /** 以指定的经度和纬度创建一个地理点坐标 */
        constructor(lng: number, lat: number);

        /**地理经度 */
        lng: number;
        /**地理纬度 */
        lat: number;
        /**判断坐标点是否相等，当且仅当两点的经度和纬度均相等时返回true */
        equals(other: Point): boolean;
    }

    /**此类表示地图上的一点，单位为像素。 */
    class Pixel {
        /** 创建像素点对象实例。像素坐标的坐标原点为地图区域的左上角 */
        constructor(x: number, y: number);
        /**x坐标*/
        x: number;
        /**y坐标 */
        y: number;
        /**判断坐标点是否相等，当且仅当两点的x坐标和y坐标均相等时返回true */
        equals(other: Pixel): boolean;
    }

    /**此类表示地理坐标的矩形区域。 */
    class Bounds {
        /**创建一个包含所有给定点坐标的矩形区域。其中sw表示矩形区域的西南角，参数ne表示矩形区域的东北角 */
        constructor(sw: Point, ne: Point);

        /**当且仅当此矩形中的两点参数都等于其他矩形的两点参数时，返回true */
        equals(other: Bounds): boolean;
        /**如果点的地理坐标位于此矩形内，则返回true */
        containsPoint(point: Point): boolean;
        /**传入的矩形区域完全包含于此矩形区域中，则返回true */
        containsBounds(bounds: Bounds): boolean;
        /**计算与另一矩形的交集区域 */
        intersects(other: Bounds): boolean;
        /**放大此矩形，使其包含给定的点*/
        extend(point: Point): void;
        /**返回矩形的中心点 */
        getCenter(): Point;
        /**如果矩形为空，则返回true */
        isEmpty(): boolean;
        /**返回矩形区域的西南角 */
        getSouthWest(): Point;
        /**返回矩形区域的东北角 */
        getNorthEast(): Point;
        /**返回矩形区域的跨度 */
        toSpan(): Point;
    }

    /** 此类以像素表示一个矩形区域的大小。*/
    class Size {
        /** 以指定的宽度和高度创建一个矩形区域大小对象 */
        constructor(width: number, height: number);

        /**水平方向的数值 */
        width: number;
        /**竖直方向的数值 */
        height: number;
        /**当且仅当此矩形中的宽度和高度都等于其他矩形的宽度和高度时，返回true */
        equals(other: Size): boolean;
    }

    //#endregion //基础类

    //#region 控件类

    /**此类是所有控件的基类，您可以通过此类来实现自定义控件。所有控件均包含Control类的属性、方法和事件。通过Map.addControl()方法可将控件添加到地图上。 */
    class Control {
        /**创建一个控件原型实例，通过该原型实例可创建自定义控件 */
        constructor();

        /**控件默认的停靠位置。自定义控件时需要提供此属性，作为控件的默认停靠位置 */
        defaultAnchor: ControlAnchor;
        /**控件默认的位置偏移值。自定义控件时需要提供此属性，作为控件的默认偏移位置 */
        defaultOffset: Size;

        /**抽象方法。调用Map.addControl()方法添加控件时将调用此方法，从而实现该控件的初始化。自定义控件时需要实现此方法，并将元素的DOM元素在该方法中返回。DOM元素需要添加到地图的容器中，使用map.getContainer()方法可获得地图容器元素 */
        initialize(map: Map): HTMLElement;
        /**设置控件停靠的位置 */
        setAnchor(anchor: ControlAnchor): void;
        /**返回控件停靠的位置 */
        getAnchor(): ControlAnchor;
        /**设置控件停靠的偏移量 */
        setOffset(offset: Size): void;
        /**返回控件停靠的偏移量 */
        getOffset(): Size;
        /**显示控件 */
        show(): void;
        /**隐藏控件 */
        hide(): void;
        /**判断控件的可见性 */
        isVisible(): boolean;
    }

    /**此类表示地图的平移缩放控件，可以对地图进行上下左右四个方向的平移和缩放操作。 */
    class NavigationControl extends Control {
        /**创建一个特定样式的地图平移缩放控件 */
        constructor(type?: NavigationControlOptions);

        /**返回平移缩放控件的类型 */
        getType(): NavigationControlType;
        /**设置平移缩放控件的类型 */
        setType(type: NavigationControlType): void;
    }

    /**此类表示NavigationControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。 */
    interface NavigationControlOptions {
        /**控件的停靠位置 */
        anchor?: ControlAnchor;
        /**控件的水平偏移值 */
        offset?: Size;
        /**平移缩放控件的类型 */
        type?: NavigationControlType;
        /**是否显示级别提示信息 */
        showZoomInfo?: boolean;
        /**控件是否集成定位功能，默认为false */
        enableGeolocation?: boolean;
    }

    /**此类是负责进行地图定位的控件，使用html5浏览器定位功能，此类继承Control所有功能。 */
    class GeolocationControl extends Control {
        /**创建一个特定样式的地图定位控件 */
        constructor(type: GeolocationControlOptions);

        /**开始进行定位 */
        location(): void;
        /**返回当前的定位信息。若当前还未定位，则返回null */
        getAddressComponent(): AddressComponent;

        //addEventListener(eventName: string, eventHandler: (e: MapEvent) => void): void;
        //removeEventListener(eventName: string, eventHandler: (e: MapEvent) => void): void;

        /**定位成功后触发此事件 */
        locationSuccess: (point, AddressComponent) => void;
        locationError: (StatusCode) => void;
    }

    /**此类表示GeolocationControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。 */
    interface GeolocationControlOptions {
        /**控件的停靠位置，默认定位到地图的右下角 */
        anchor?: ControlAnchor;
        /**控件的水平偏移值 */
        offset?: Size;
        /**是否显示定位信息面板。默认显示定位信息面板 */
        showAddressBar?: boolean;
        /**添加控件时是否进行定位。默认添加控件时不进行定位 */
        enableAutoLocation?: boolean;
        /**可自定义定位中心点的Icon样式 */
        locationIcon?: Icon;
    }

    /**此类表示缩略地图控件。 */
    class OverviewMapControl extends Control {
        /**创建一个缩略地图控件实例 */
        constructor(opts?: OverviewMapControlOptions);

        /**切换缩略地图控件的开合状态 */
        changeView(): void;
        /**设置缩略地图的大小 */
        setSize(size: Size): void;
        /**返回缩略地图的大小 */
        getSize(): Size;

        addEventListener(eventName: string, eventHandler: (e: OverviewMapControlEvent) => void): void;
        removeEventListener(eventName: string, eventHandler: (e: OverviewMapControlEvent) => void): void;

        /**缩略地图开合状态发生变化后触发此事件 */
        viewchanged: (type, target, isOpen) => void;
        /** 缩略地图开合状态发生变化过程中触发此事件 */
        viewchanging: (type, target) => void;
    }
    interface OverviewMapControlEvent{
        type: any,
        target: OverviewMapControl,
        isOpen: boolean
    }

    /**此类表示OverviewMapControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。 */
    interface OverviewMapControlOptions {
        /**控件的停靠位置 */
        anchor?: ControlAnchor;
        /**控件的偏移值 */
        offset?: Size;
        /**缩略地图控件的大小 */
        size?: Size;
        /**	缩略地图添加到地图后的开合状态，默认为关闭 */
        isOpen?: boolean;
    }

    /**此类表示比例尺控件。 */
    class ScaleControl extends Control {
        /**创建一个比例尺控件 */
        constructor(opts?: ScaleControlOptions);

        /**返回比例尺单位制 */
        getUnit(): LengthUnit;
        /**设置比例尺单位制 */
        setUnit(unit: LengthUnit): void;
    }

    /**此类表示ScaleControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。 */
    interface ScaleControlOptions {
        /**控件的停靠位置 */
        anchor?: ControlAnchor;
        /**控件的偏移值 */
        offset?: Size;
    }

    /**此类表示版权控件，您可以在地图上添加自己的版权信息。每一个版权信息需要包含如下内容：版权的唯一标识、版权内容和其适用的区域范围。 */
    class CopyrightControl {
        /**创建一个版权控件实例 */
        constructor(opts?: CopyrightControlOptions);

        /**添加版权信息 */
        addCopyright(copyright: Copyright): void;
        /**移除版权信息 */
        removeCopyright(id: number): void;
        /**返回单个版权信息 */
        getCopyright(id: number): Copyright;
        /**返回版权信息列表 */
        getCopyrightCollection(): Array<Copyright>;
    }

    /**此类表示CopyrightControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。 */
    interface CopyrightControlOptions {
        /**控件的停靠位置 */
        anchor?: ControlAnchor;
        /**控件的偏移值 */
        offset?: Size;
    }

    /**此类表示一条版权信息。可作为CopyrightControl.addCopyright()方法的参数。它没有构造函数，但可通过对象字面量形式表示。 */
    interface Copyright {
        /**该版权信息的唯一标识符 */
        id?: number;
        /**该版权的文本信息，用于显示在地图上，支持HTML内容 */
        content?: string;
        /**该版权信息所适用的地理区域 */
        bounds?: Bounds;
    }

    /**此类是负责切换地图类型的控件，此类继承Control所有功能。 */
    class MapTypeControl extends Control {
        /**创建地图类型控件 */
        constructor(opts?: MapTypeControlOptions);
    }

    /**此类表示MapTypeControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。 */
    interface MapTypeControlOptions {
        /**控件样式 */
        type?: MapTypeControlType;
        /**控件展示的地图类型，默认为普通图、卫星图、卫星加路网混合图和三维图。通过此属性可配置控件展示的地图类型 */
        mapTypes?: MapTypeEnum[];
    }

    /**此类是负责切换至全景地图的控件，此类继承Control所有功能。 */
    class PanoramaControl extends Control {
        /**创建全景控件实例 */
        constructor();
    }

    //#endregion //控件类

    //#region 覆盖物类

    /**覆盖物的抽象基类，所有覆盖物均继承基类的方法。此类不可实例化。 */
    abstract class Overlay {
        /**抽象方法，用于初始化覆盖物，当调用map.addOverlay时，API将调用此方法。自定义覆盖物时需要实现此方法。自定义覆盖物时需要将覆盖物对应的HTML元素返回 */
        initialize(map: Map): HTMLElement;
        /**判断覆盖物是否可见 */
        isVisible(): boolean;
        /**抽象方法，当地图状态发生变化时，由系统调用对覆盖物进行绘制。自定义覆盖物需要实现此方法 */
        draw(): void;
        /**显示覆盖物。对于自定义覆盖物，此方法会自动将initialize方法返回的HTML元素样式的display属性设置为空 */
        show(): void;
        /**隐藏覆盖物。对于自定义覆盖物，此方法会自动将initialize方法返回的HTML元素样式的display属性设置为none */
        hide(): void;
    }

    // /** 覆盖物事件的参数 */
    // interface OverlayEvent {
    //     type: Overlay;
    //     target: Overlay;
    //     pixel?: Pixel;
    //     point?: Point;
    //     overlay?: Overlay;
    //     //zoom?: number;
    //     //size?: Size;
    // }

    /**此类表示地图上所有覆盖物的容器集合，没有构造函数，通过对象字面量形式表示。通过Map的getPanes方法可获得该对象实例。 */
    interface MapPanes {
        /**信息窗口所在的容器 */
        floatPane?: HTMLElement;
        /**标注点击区域所在的容器 */
        markerMouseTarget?: HTMLElement;
        /**信息窗口阴影所在的容器 */
        floatShadow?: HTMLElement;
        /**文本标注所在的容器 */
        labelPane?: HTMLElement;
        /**标注图标所在的容器 */
        markerPane?: HTMLElement;
        /**标注阴影所在的容器 */
        markerShadow?: HTMLElement;
        /**折线、多边形等矢量图形所在的容器 */
        mapPane?: HTMLElement;
    }

    /**此类表示地图上一个图像标注。 */
    class Marker extends Overlay {
        /**创建一个图像标注实例。point参数指定了图像标注所在的地理位置 */
        constructor(point: Point, opts?: MarkerOptions);

        /** 标注的文字 */
        content: string;

        /**打开信息窗 */
        openInfoWindow(infoWnd: InfoWindow): void;
        /**关闭信息窗 */
        closeInfoWindow(): void;
        /**设置标注所用的图标对象 */
        setIcon(icon: Icon): void;
        /**返回标注所用的图标对象 */
        getIcon(): Icon;
        /**设置标注的地理坐标 */
        setPosition(position: Point): void;
        /**返回标注的地理坐标 */
        getPosition(): Point;
        /**设置标注的偏移值 */
        setOffset(offset: Size): void;
        /**返回标注的偏移值 */
        getOffset(): Size;
        /**返回标注的文本标注 */
        getLabel(): Label;
        /**为标注添加文本标注 */
        setLabel(label: Label): void;
        /**设置标注的标题，当鼠标移至标注上时显示此标题 */
        setTitle(title: string): void;
        /**返回标注的标题 */
        getTitle(): string
        /**将标注置于其他标注之上。默认情况下，纬度较低的标注会覆盖在纬度较高的标注之上，从而形成一种立体效果。通过此方法可使某个标注覆盖在其他所有标注之上。注意：如果在多个标注对象上调用此方法，则这些标注依旧按照纬度产生默认的覆盖效果 */
        setTop(isTop: boolean): void;
        /**开启标注拖拽功能 */
        enableDragging(): void;
        /**关闭标注拖拽功能 */
        disableDragging(): void;
        /**允许覆盖物在map.clearOverlays方法中被清除 */
        enableMassClear(): void;
        /**禁止覆盖物在map.clearOverlays方法中被清除 */
        disableMassClear(): void;
        /**设置覆盖物的zIndex */
        setZIndex(zIndex: number): void;
        /**返回覆盖物所在的map对象 */
        getMap(): Map;
        /**添加右键菜单 */
        addContextMenu(menu: ContextMenu): void;
        /**移除右键菜单 */
        removeContextMenu(menu: ContextMenu): void;
        /**设置标注动画效果。如果参数为null，则取消动画效果。该方法需要在addOverlay方法后设置 */
        setAnimation(animation: Animation | null): void;
        /**设置点的旋转角度 */
        setRotation(rotation: number): void;
        /**获取点的旋转角度 */
        getRotation(): number;
        /**设置标注阴影图标 */
        setShadow(shadow: Icon): void;
        /**获取标注阴影图标 */
        getShadow(): Icon;

        /**添加Marker的事件监听函数 */
        addEventListener(event: string, handler: (e: MarkerEvent) => void): void;
        /**移除Marker的事件监听函数 */
        removeEventListener(event: string, handler: (e: MarkerEvent) => void): void;

        // 事件	参数	描述
        /**点击标注图标后会触发此事件 */
        click: (event: { type, target }) => void;
        /**双击标注图标后会触发此事件 */
        dblclick: (event: { type, target, point, pixel }) => void;
        /**鼠标在标注图上按下触发此事件 */
        mousedown: (event: { type, target, point, pixel }) => void;
        /**鼠标在标注图上释放触发此事件 */
        mouseup: (event: { type, target, point, pixel }) => void;
        /**鼠标离开标注时触发此事件 */
        mouseout: (event: { type, target, point, pixel }) => void;
        /**当鼠标进入标注图标区域时会触发此事件 */
        mouseover: (event: { type, target, point, pixel }) => void;
        /**移除标注时触发 */
        remove: (event: { type, target }) => void;
        /**信息窗在此标注上关闭时触发此事件 */
        infowindowclose: (event: { type, target }) => void;
        /**信息窗在此标注上打开时触发此事件 */
        infowindowopen: (event: { type, target }) => void;
        /**开始拖拽标注时触发此事件 */
        dragstart: (event: { type, target }) => void;
        /**拖拽标注过程中触发此事件 */
        dragging: (event: { type, target, pixel, point }) => void;
        /**拖拽结束时触发此事件 */
        dragend: (event: { type, target, pixel, point }) => void;
        /**右键点击标注时触发此事件 */
        rightclick: (event: { type, target }) => void;
    }

    /** Marker的事件监听参数 */
    interface MarkerEvent {
        type: Overlay;
        target: Marker;
        pixel?: Pixel;
        point?: Point;
        // overlay?: Overlay;
        // zoom?: number;
        // size?: Size;
    }

    /**此类表示Marker构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。 */
    interface MarkerOptions {
        /**标注的位置偏移值 */
        offset?: Size;
        /**标注所用的图标对象 */
        icon?: any;//Icon;
        /**是否在调用map.clearOverlays清除此覆盖物，默认为true */
        enableMassClear?: boolean;
        /**是否启用拖拽，默认为false */
        enableDragging?: boolean;
        /**是否响应点击事件。默认为true */
        enableClicking?: boolean;
        /**拖拽标注时，标注是否开启离开地图表面效果。默认为false */
        raiseOnDrag?: boolean;
        /**拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范 */
        draggingCursor?: string;
        /**旋转角度 */
        rotation?: number;
        /**阴影图标 */
        shadow?: Icon;
        /**鼠标移到marker上的显示内容 */
        title?: string;
    }

    /**此类表示标注覆盖物所使用的图标。 */
    class Icon extends Overlay {
        /**以给定的图像地址和大小创建图标对象实例 */
        constructor(url: string, size: Size, opts?: IconOptions);

        /**图标的定位点相对于图标左上角的偏移值 */
        anchor: Size;
        /**图标可视区域的大小 */
        size: Size;
        /**图标所用的图片相对于可视区域的偏移值，此功能的作用等同于CSS中的background - position属性 */
        imageOffset: Size;
        /**图标所用的图片的大小，此功能的作用等同于CSS中的background - size属性。可用于实现高清屏的高清效果 */
        imageSize: Size;
        /**图标所用图像资源的位置 */
        imageUrl: string;
        /**信息窗口开启位置相对于图标左上角的偏移值 */
        infoWindowAnchor: Size;
        /**设置icon打印图片的url，该打印图片只针对IE6有效，解决IE6使用PNG滤镜导致的错位问题。如果您的icon没有使用PNG格式图片或者没有使用CSS Sprites技术，则可忽略此配置 */
        printImageUrl: string;

        /**设置图片资源的地址 */
        setImageUrl(imageUrl: string): void;
        /**设置图标可视区域的大小 */
        setSize(size: Size): void;
        /**设置图标的大小 */
        setImageSize(offset: Size): void;
        /**设置图标定位点相对于其左上角的偏移值 */
        setAnchor(anchor: Size): void;
        /**设置图片相对于可视区域的偏移值 */
        setImageOffset(offset: Size): void;
        /**设置信息窗口开启位置相对于图标左上角的偏移值 */
        setInfoWindowAnchor(anchor: Size): void;
        /**设置icon的打印图片，该打印图片只针对IE6有效，解决IE6使用PNG滤镜导致的错位问题。如果您的icon没有使用PNG格式图片或者没有使用CSS Sprites技术，则可忽略此配置 */
        setPrintImageUrl(url: string): void;
    }
    /**此类表示Icon构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。 */
    interface IconOptions {
        /**图标的定位锚点。此点用来决定图标与地理位置的关系，是相对于图标左上角的偏移值，默认等于图标宽度和高度的中间值 */
        anchor?: Size;
        /**图片相对于可视区域的偏移值 */
        imageOffset?: Size;
        /**信息窗口定位锚点。开启信息窗口时，信息窗口底部尖角相对于图标左上角的位置，默认等于图标的anchor */
        infoWindowAnchor?: Size;
        /**用于打印的图片，此属性只适用于IE6，为了解决IE6在包含滤镜的情况下打印样式不正确的问题 */
        printImageUrl?: string;
    }

    /**此类表示地图上包含信息的窗口。 */
    class InfoWindow extends Overlay {
        /**创建一个信息窗实例，其中content支持HTML内容。从1.2版本开始content参数支持传入DOM结点 */
        constructor(content: string | HTMLElement, opts?: InfoWindowOptions);

        /**设置信息窗口的宽度，单位像素。取值范围：220 - 730 */
        setWidth(width: number): void;
        /**设置信息窗口的高度，单位像素。取值范围：60 - 650 */
        setHeight(height: number): void;
        /**重绘信息窗口，当信息窗口内容发生变化时进行调用 */
        redraw(): void;
        /**设置信息窗口标题。支持HTML内容。从1.2版本开始title参数支持传入DOM结点 */
        setTitle(title: string | HTMLElement): void;
        /**返回信息窗口标题 */
        getTitle(): string | HTMLElement;
        /**设置信息窗口内容。支持HTML内容。1.2版本开始content参数支持传入DOM结点 */
        setContent(content: string | HTMLElement): void;
        /**返回信息窗口内容 */
        getContent(): string | HTMLElement;
        /**返回信息窗口的位置 */
        getPosition(): Point;
        /**启用窗口最大化功能。需要设置最大化后信息窗口里的内容，该接口才生效 */
        enableMaximize(): void;
        /**禁用窗口最大化功能 */
        disableMaximize(): void;
        /**返回信息窗口的打开状态 */
        isOpen(): boolean;
        /**信息窗口最大化时所显示内容，支持HTML内容 */
        setMaxContent(content: string): void;
        /**最大化信息窗口 */
        maximize(): void;
        /**还原信息窗口 */
        restore(): void;
        /**开启打开信息窗口时地图自动平移 */
        enableAutoPan(): void;
        /**关闭打开信息窗口时地图自动平移 */
        disableAutoPan(): void;
        /**开启点击地图时关闭信息窗口 */
        enableCloseOnClick(): void;
        /**关闭点击地图时关闭信息窗口 */
        disableCloseOnClick(): void;

        /**添加事件监听函数 */
        addEventListener(event: string, handler: (e: InfoWindowEvent) => void): void;
        /**移除事件监听函数 */
        removeEventListener(event: string, handler: (e: InfoWindowEvent) => void): void;

        /**信息窗口被关闭时触发此事件 */
        close: (event: { type, target, point }) => void;
        /**信息窗口被打开时触发此事件 */
        open: (event: { type, target, point }) => void;
        /**信息窗口最大化后触发此事件 */
        maximize(event: { type, target }): void;
        /**信息窗口还原时触发此事件 */
        restore(event: { type, target }): void;
        /**点击信息窗口的关闭按钮时触发此事件 */
        clickclose: (event: { type, target }) => void;
    }
    interface InfoWindowEvent {
        type: any;
        target: InfoWindow;
        point?: Point;
        //pixel?: Pixel;
        //overlay?: Overlay;
        //zoom?: any;
        //size?: any;
    }

    /**此类表示InfoWindow构造函数的可选参数，它没有构造函数，但可通过对象字面量形式表示。 */
    interface InfoWindowOptions {
        /**信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整 */
        width?: number;
        /**信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整 */
        height?: number;
        /**信息窗最大化时的宽度，单位像素。取值范围：220 - 730 */
        maxWidth?: number;
        /**信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，在标注上打开的信息窗底端尖角的位置取决于标注所用图标的infoWindowOffset属性值，您可以为信息窗添加偏移量来改变默认位置 */
        offset?: Size;
        /**信息窗标题文字，支持HTML内容 */
        title?: string;
        /**是否开启信息窗口打开时地图自动移动（默认开启） */
        enableAutoPan?: boolean;
        /**是否开启点击地图关闭信息窗口（默认开启） */
        enableCloseOnClick?: boolean;
        /**是否在信息窗里显示短信发送按钮（默认开启） */
        enableMessage?: boolean;
        /**自定义部分的短信内容，可选项。完整的短信内容包括：自定义部分 + 位置链接，不设置时，显示默认短信内容。短信内容最长为140个字 */
        message?: string;
    }

    /**此类表示地图上的文本标注。 */
    class Label extends Overlay {
        /**创建一个文本标注实例。point参数指定了文本标注所在的地理位置 */
        constructor(content: string, opts?: LabelOptions);

        content: string;
        /**设置文本标注样式，该样式将作用于文本标注的容器元素上。其中styles为JavaScript对象常量，比如： setStyle({ color: "red", fontSize: "12px" }) 注意：如果css的属性名中包含连字符，需要将连字符去掉并将其后的字母进行大写处理，例如：背景色属性要写成：backgroundColor */
        setStyle(styles: Object): void;
        /**设置文本标注的内容。支持HTML */
        setContent(content: string): void;
        /**设置文本标注坐标。仅当通过Map.addOverlay()方法添加的文本标注有效 */
        setPosition(position: Point): void;
        /**获取Label的地理坐标 */
        getPosition(): Point;
        /**设置文本标注的偏移值 */
        setOffset(offset: Size): void;
        /**返回文本标注的偏移值 */
        getOffset(): Size;
        /**设置文本标注的标题，当鼠标移至标注上时显示此标题 */
        setTitle(title: string): void;
        /**返回文本标注的标题 */
        getTitle(): string;
        /**允许覆盖物在map.clearOverlays方法中被清除 */
        enableMassClear(): string;
        /**禁止覆盖物在map.clearOverlays方法中被清除 */
        disableMassClear(): void;
        /**设置覆盖物的zIndex */
        setZIndex(zIndex: number): void;
        /**设置地理坐标 */
        setPosition(position: Point): void;
        /**返回覆盖物所在的map对象 */
        getMap(): Map;

        /**添加事件监听函数 */
        addEventListener(event: string, handler: (event:LabelEvent)=>void): void;
        /**移除事件监听函数 */
        removeEventListener(event: string, handler: (event:LabelEvent)=>void): void;

        /**点击文本标注后会触发此事件 */
        click: (event: { type, target }) => void;
        /**双击文本标注后会触发此事件 */
        dblclick: (event: { type, target }) => void;
        /**鼠标在文本标注上按下触发此事件 */
        mousedown: (event: { type, target }) => void;
        /**鼠标在文本标注释放触发此事件 */
        mouseup: (event: { type, target }) => void;
        /**鼠标离开文本标注时触发此事件 */
        mouseout: (event: { type, target }) => void;
        /**当鼠标进入文本标注区域时会触发此事件 */
        mouseover: (event: { type, target }) => void;
        /**移除文本标注时触发 */
        remove: (event: { type, target }) => void;
        /**右键点击标注时触发此事件 */
        rightclick: (event: { type, target }) => void;
    }

    interface LabelEvent {
        type: Overlay;
        target: Label;
        //pixel?: Pixel;
        //point?: Point;
        //overlay?: Overlay;
        //zoom?: number;
        //size?: Size;
    }

    /**此类表示Lable构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。 */
    interface LabelOptions {
        /**文本标注的位置偏移值 */
        offset?: Size;
        /**文本标注的地理位置 */
        position?: Point;
        /**是否在调用map.clearOverlays清除此覆盖物，默认为true */
        enableMassClear?: boolean;
    }

    /**使用浏览器的矢量制图工具（如果可用）在地图上绘制折线的地图叠加层。 */
    class Polyline extends Overlay {
        /**创建折线覆盖物对象 */
        constructor(points: Array<Point>, opts?: PolylineOptions);

        /**设置折线的点数组 */
        setPath(path: Array<Point>): void;
        /**返回折线的点数组 */
        getPath(): Array<Point>;
        /**设置折线的颜色 */
        setStrokeColor(color: string): void;
        /**返回折线的颜色 */
        getStrokeColor(): string;
        /**设置透明度，取值范围0 - 1 */
        setStrokeOpacity(opacity: number): void;
        /**返回透明度 */
        getStrokeOpacity(): number;
        /**设置线的宽度，范围为大于等于1的整数 */
        setStrokeWeight(weight: number): void;
        /**返回线的宽度 */
        getStrokeWeight(): number;
        /**设置是为实线或虚线，solid或dashed */
        setStrokeStyle(style: string): void;
        /**返回当前线样式状态，实线或者虚线 */
        getStrokeStyle(): string;
        /**返回覆盖物的地理区域范围 */
        getBounds(): Bounds;
        /**开启编辑功能 */
        enableEditing(): void;
        /**关闭编辑功能 */
        disableEditing(): void;
        /**允许覆盖物在map.clearOverlays方法中被清除 */
        enableMassClear(): void;
        /**禁止覆盖物在map.clearOverlays方法中被清除 */
        disableMassClear(): void;
        /**修改指定位置的坐标。索引index从0开始计数。例如setPointAt(2, point)代表将折线的第3个点的坐标设为point */
        setPositionAt(index: number, point: Point): void;
        /**返回覆盖物所在的map对象 */
        getMap(): Map;

        /**添加事件监听函数 */
        addEventListener(event: string, handler: (e: PolylineEvent)=>void): void;
        /**移除事件监听函数 */
        removeEventListener(event: string, handler: (e: PolylineEvent) => void): void;

        /**点击折线后会触发此事件 */
        click: (event: { type, target, point, pixel }) => void;
        /**双击折线后会触发此事件 */
        dblclick: (event: { type, target, point, pixel }) => void;
        /**鼠标在折线上按下触发此事件 */
        mousedown: (event: { type, target, point, pixel }) => void;
        /**鼠标在折线释放触发此事件 */
        mouseup: (event: { type, target, point, pixel }) => void;
        /**鼠标离开折线时触发此事件 */
        mouseout: (event: { type, target, point, pixel }) => void;
        /**当鼠标进入折线区域时会触发此事件 */
        mouseover: (event: { type, target, point, pixel }) => void;
        /**移除折线时触发 */
        remove: (event: { type, target }) => void;
        /**覆盖物的属性发生变化时触发 */
        lineupdate: (event: { type, target }) => void;
    }

    interface PolylineEvent {
        type: Overlay;
        target: Polyline;
        point?: Point;
        pixel?: Pixel;
        //overlay?: Overlay;
        //zoom?: number;
        //size?: Size;
    }

    /**此类表示Polyline构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。 */
    interface PolylineOptions {
        /**折线颜色 */
        strokeColor?: string;
        /**折线的宽度，以像素为单位 */
        strokeWeight?: number;
        /**折线的透明度，取值范围0 - 1 */
        strokeOpacity?: number;
        /**折线的样式，solid或dashed */
        strokeStyle?: string;
        /**是否在调用map.clearOverlays清除此覆盖物，默认为true */
        enableMassClear?: boolean;
        /**是否启用线编辑，默认为false */
        enableEditing?: boolean;
        /**是否响应点击事件，默认为true */
        enableClicking?: boolean;
        /**配置贴合折线的图标 */
        icons?: Array<IconSequence>;
    }

    /**此类用于设置polyline上的符号显示。 */
    class IconSequence extends Overlay {
        /**创建线上的符号类。symbol为符号样式; offset为符号相对于线起点的位置，取值可以是百分比也可以是像素位置，默认为"100%"; repeat为符号在线上重复显示的距离，可以是百分比也可以是距离值，同时设置repeat与offset时，以repeat为准; fixedRotation设置图标的旋转角度是否与线走向一致，默认为true */
        constructor(symbol: Symbol, offset: string, repeat: string, fixedRotation?: boolean);
    }

    /**此类表示一个多边形覆盖物。 */
    class Polygon extends Overlay {
        /**创建多边形覆盖物 */
        constructor(points: Point[], opts?: PolygonOptions);

        /**设置多边型的点数组 */
        setPath(path: Point[]): void;
        /**返回多边型的点数组 */
        getPath(): Point[];
        /**设置多边型的边线颜色，参数为合法的CSS颜色值 */
        setStrokeColor(color: string): void;
        /**返回多边型的边线颜色 */
        getStrokeColor(): string
        /**设置多边形的填充颜色，参数为合法的CSS颜色值。当参数为空字符串时，折线覆盖物将没有填充效果 */
        setFillColor(color: string): void;
        /**返回多边形的填充颜色 */
        getFillColor(): string;
        /**设置多边形的边线透明度，取值范围0 - 1 */
        setStrokeOpacity(opacity: number): void;
        /**返回多边形的边线透明度 */
        getStrokeOpacity(): number;
        /**设置多边形的填充透明度，取值范围0 - 1 */
        setFillOpacity(opacity: number): void;
        /**返回多边形的填充透明度 */
        getFillOpacity(): number;
        /**设置多边形边线的宽度，取值为大于等于1的整数 */
        setStrokeWeight(weight: number): void;
        /**返回多边形边线的宽度 */
        getStrokeWeight(): number;
        /**设置多边形边线样式为实线或虚线，取值solid或dashed */
        setStrokeStyle(style: string): void;
        /**返回多边形边线样式 */
        getStrokeStyle(): string;
        /**返回覆盖物的地理区域范围 */
        getBounds(): Bounds;
        /**开启编辑功能 */
        enableEditing(): void;
        /**关闭编辑功能 */
        disableEditing(): void;
        /**允许覆盖物在map.clearOverlays方法中被清除 */
        enableMassClear(): void;
        /**禁止覆盖物在map.clearOverlays方法中被清除 */
        disableMassClear(): void;
        /**修改指定位置的坐标。索引index从0开始计数。例如setPositionAt(2, point)代表将折线的第3个点的坐标设为point */
        setPositionAt(index: number, point: Point): void;
        /**返回覆盖物所在的map对象 */
        getMap(): Map;

        /**添加事件监听函数 */
        addEventListener(event: string, handler: (e: PolygonEvent)=>void): void;
        /**移除事件监听函数 */
        removeEventListener(event: string, handler: (e: PolygonEvent) => void): void;

        /**点击多边形后会触发此事件 */
        click: (event: { type, target, point, pixel }) => void;
        /**双击多边形后会触发此事件 */
        dblclick: (event: { type, target, point, pixel }) => void;
        /**鼠标在多边形上按下触发此事件 */
        mousedown: (event: { type, target, point, pixel }) => void;
        /**鼠标在多边形释放触发此事件 */
        mouseup: (event: { type, target, point, pixel }) => void;
        /**鼠标离开多边形时触发此事件 */
        mouseout: (event: { type, target, point, pixel }) => void;
        /**当鼠标进入多边形区域时会触发此事件 */
        mouseover: (event: { type, target, point, pixel }) => void;
        /**移除多边形时触发 */
        remove: (event: { type, target }) => void;
        /**覆盖物的属性发生变化时触发 */
        lineupdate: (event: { type, target }) => void;
    }

    interface PolygonEvent {
        type: Overlay;
        target: Polygon;
        point?: Point;
        pixel?: Pixel;
        //overlay?: Overlay;
        //zoom?: number;
        //size?: Size;
    }

    /**此类表示Polygon构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。 */
    interface PolygonOptions {
        /**边线颜色 */
        strokeColor?: string;
        /**填充颜色。当参数为空时，折线覆盖物将没有填充效果 */
        fillColor?: string;
        /**边线的宽度，以像素为单位 */
        strokeWeight?: number;
        /**边线透明度，取值范围0 - 1 */
        strokeOpacity?: number;
        /**填充的透明度，取值范围0 - 1 */
        fillOpacity?: number;
        /**边线的样式，solid或dashed */
        strokeStyle?: string;
        /**是否在调用map.clearOverlays清除此覆盖物，默认为true */
        enableMassClear?: boolean;
        /**是否启用线编辑，默认为false */
        enableEditing?: boolean;
        /**是否响应点击事件，默认为true */
        enableClicking?: boolean;
    }

    /**此类表示地图上的圆覆盖物。 */
    class Circle extends Overlay {
        /**创建圆覆盖物 */
        constructor(center: Point, radius: number, opts?: CircleOptions);

        /**设置圆形的中心点坐标 */
        setCenter(center: Point): void;
        /**返回圆形的中心点坐标 */
        getCenter(): Point;
        /**设置圆形的半径，单位为米 */
        setRadius(radius: number): void;
        /**返回圆形的半径，单位为米 */
        getRadius(): number;
        /**返回圆形的地理区域范围 */
        getBounds(): Bounds;
        /**设置圆形的边线颜色，参数为合法的CSS颜色值 */
        setStrokeColor(color: string): void;
        /**返回圆形的边线颜色 */
        getStrokeColor(): string;
        /**设置圆形的填充颜色，参数为合法的CSS颜色值。当参数为空字符串时，圆形覆盖物将没有填充效果 */
        setFillColor(color: string): void;
        /**返回圆形的填充颜色 */
        getFillColor(): string;
        /**设置圆形的边线透明度，取值范围0 - 1 */
        setStrokeOpacity(opacity: number): void;
        /**返回圆形的边线透明度 */
        getStrokeOpacity(): number;
        /**设置圆形的填充透明度，取值范围0 - 1 */
        setFillOpacity(opacity: number): void;
        /**返回圆形的填充透明度 */
        getFillOpacity(): number;
        /**设置圆形边线的宽度，取值为大于等于1的整数 */
        setStrokeWeight(weight: number): void;
        /**返回圆形边线的宽度 */
        getStrokeWeight(): number;
        /**设置圆形边线样式为实线或虚线，取值solid或dashed */
        setStrokeStyle(style: string): void;
        /**返回圆形边线样式 */
        getStrokeStyle(): string;
        /**开启编辑功能 */
        enableEditing(): void;
        /**关闭编辑功能 */
        disableEditing(): void;
        /**允许覆盖物在map.clearOverlays方法中被清除 */
        enableMassClear(): void;
        /**禁止覆盖物在map.clearOverlays方法中被清除 */
        disableMassClear(): void;
        /**返回覆盖物所在的map对象 */
        getMap(): Map;

        /**添加事件监听函数 */
        addEventListener(event: string, handler: (e: CircleEvent) => void): void;
        /**移除事件监听函数 */
        removeEventListener(event: string, handler: (e: CircleEvent) => void): void;

        /**鼠标点击圆形后会触发此事件 */
        click: (event: { type, target, point, pixel }) => void;
        /**鼠标双击圆形后会触发此事件 */
        dblclick: (event: { type, target, point, pixel }) => void;
        /**鼠标在圆形上按下触发此事件 */
        mousedown: (event: { type, target, point, pixel }) => void;
        /**鼠标在圆形释放触发此事件 */
        mouseup: (event: { type, target, point, pixel }) => void;
        /**鼠标离开圆形时触发此事件 */
        mouseout: (event: { type, target, point, pixel }) => void;
        /**当鼠标进入圆形区域时会触发此事件 */
        mouseover: (event: { type, target, point, pixel }) => void;
        /**移除圆形时触发此事件 */
        remove: (event: { type, target }) => void;
        /**圆形覆盖物的属性发生变化时触发此事件 */
        lineupdate: (event: { type, target }) => void;
    }

    interface CircleEvent {
        type: Overlay;
        target: Circle;
        point?: Point;
        pixel?: Pixel;
        //overlay?: Overlay;
        //zoom?: number;
        //size?: Size;
    }

    /**Circle类构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。 */
    interface CircleOptions {
        /**圆形边线颜色 */
        strokeColor?: string;
        /**圆形填充颜色。当参数为空时，圆形将没有填充效果 */
        fillColor?: string;
        /**圆形边线的宽度，以像素为单位 */
        strokeWeight?: number;
        /**圆形边线透明度，取值范围0 - 1 */
        strokeOpacity?: number;
        /**圆形填充的透明度，取值范围0 - 1 */
        fillOpacity?: number;
        /**圆形边线的样式，solid或dashed */
        strokeStyle?: string;
        /**是否在调用map.clearOverlays清除此覆盖物，默认为true */
        enableMassClear?: boolean;
        /**是否启用线编辑，默认为false */
        enableEditing?: boolean;
        /**是否响应点击事件，默认为true */
        enableClicking?: boolean;
    }

    /**此类表示地图上的地面叠加层。 */
    class GroundOverlay extends Overlay {
        /**创建地面叠加层 */
        constructor(bounds: Bounds, opts?: GroundOverlayOptions);

        /**设置图层显示的矩形区域 */
        setBounds(bounds: Bounds): void;
        /**返回图层显示的矩形区域 */
        getBounds(): Bounds;
        /**设置图层的透明度 */
        setOpacity(opcity: number): void;
        /**返回图层的透明度 */
        getOpacity(): number;
        /**返回图层地址 */
        setImageURL(url: string): void;
        /**返回图层地址 */
        getImageURL(): string;
        /**设置图层显示的最小级别 */
        setDisplayOnMinLevel(level: number): void;
        /**返回图层显示的最小级别 */
        getDisplayOnMinLevel(): number;
        /**设置图层显示的最大级别 */
        setDispalyOnMaxLevel(level: number): void;
        /**返回图层显示的最大级别 */
        getDispalyOnMaxLevel(): number;

        /**添加事件监听函数 */
        addEventListener(event: string, handler: (e: GroundOverlayEvent) => void): void;
        /**移除事件监听函数 */
        removeEventListener(event: string, handler: (e: GroundOverlayEvent) => void): void;

        /**鼠标点击图层后会触发此事件 */
        click: (event: { type, target }) => void;
        /**鼠标双击图层后会触发此事件 */
        dblclick: (event: { type, target }) => void;
    }

    interface GroundOverlayEvent {
        type: Overlay;
        target: GroundOverlay;
        //point?: Point;
        //pixel?: Pixel;
        //overlay?: Overlay;
        //zoom?: number;
        //size?: Size;
    }

    /**GroundOverlay类构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。 */
    interface GroundOverlayOptions {
        /**图层透明度 */
        opacity?: number;
        /**图层地址 */
        imageURL?: string;
        /**图层显示的最小级别 */
        displayOnMinLevel?: number;
        /**图层显示的最大级别 */
        displayOnMaxLevel?: number;
    }

    /**此类表示海量点类，利用该类可同时在地图上展示万级别的点，目前仅适用于html5浏览器。 */
    class PointCollection extends Overlay {
        /**创建海量点类。points为点的坐标集合，opts为点的绘制样式 */
        constructor(points: Array<Point>, opts?: PointCollectionOptions);

        /**设置要在地图上展示的点坐标集合 */
        setPoints(points: Array<Point>): void;
        /**点的样式，包括: 大小"size"（可选, 默认正常尺寸10 * 10px，SizeType类型），形状"shape"（可选，默认圆形，ShapeType类型），颜色"color"（可选，字符串类型） */
        setStyles(styles: PointCollectionOptions): void;
        /**清除海量点 */
        clear(): void;

        /**添加事件监听函数 */
        addEventListener(event: string, handler: (e: PointCollectionEvent) => void): void;
        /**移除事件监听函数 */
        removeEventListener(event: string, handler: (e: PointCollectionEvent) => void): void;

        /**鼠标点击点时会触发此事件 */
        click: (event: { type, target, point }) => void;
        /**鼠标移入点时会触发该事件 */
        mouseover: (event: { type, target, point }) => void;
        /**鼠标移出点时会触发该事件 */
        mouseout: (event: { type, target, point }) => void;
    }

    interface PointCollectionEvent {
        type: Overlay;
        target: PointCollectionEvent;
        point?: Point;
        //pixel?: Pixel;
        //overlay?: Overlay;
        //zoom?: number;
        //size?: Size;
    }

    /**该类是PointCollections的可选参数，没有构造函数，通过对象字面量形式表示。 */
    interface PointCollectionOptions {
        /**海量点的预设形状 */
        shape?: ShapeType;
        /**海量点的颜色，默认为'#fa937e'，同时支持颜色字符串，如'red'；哈希字符串'#000000'；rgb字符串，如'rgb(0,0,0)’；rgba字符串，如'rgb(255, 0, 0, 0.1)'；hsl字符串，如'hsl(0, 100 %, 50 %)'；hsla字符串，如'hsla(0, 100 %, 50 %, 0.4)' */
        color?: string;
        /**海量点的预设尺寸 */
        size?: SizeType;
    }

    /**此类表示地图上的一个热区（人口密度）。 */
    class Hotspot extends Overlay {
        constructor(position: Point, options?: HotspotOptions);

        /**获取热区位置坐标 */
        getPosition(): Point;
        /**设置热区位置坐标 */
        setPosition(position: Point): void;
        /**获取热区提示文本 */
        getText(): string;
        /**设置热区提示文本 */
        setText(text: string): void;
        /**获取热区对应的用户数据 */
        getUserData(): any; //Mix;
        /**设置热区对应的用户数据（data: Mix） */
        setUserData(data: any): void;
    }
    /**此类是addHotspot方法的可选参数，没有构造函数，通过对象字面量形式表示。 */
    interface HotspotOptions {
        /**当鼠标移至某一热区上时出现的文字提示 */
        text?: string;
        /**热区响应区域距中心点的扩展偏移值。数组的四个数值分别表示上、右、下、左距离中心点的扩展偏移量。默认偏移量为[5, 5, 5, 5] */
        offsets?: number[];
        /**由用户填入的自定义数据 */
        userData?: any;//Mix;
        /**热区生效的最小级别 */
        minZoom?: number;
        /**热区生效的最大级别 */
        maxZoom?: number;
    }

    /**此类表示通过svg的path string创建的矢量图标类。 */
    class Symbol extends Overlay {
        /**创建一个矢量图标实例。path为svg中的path字符串或者已定义的符号常量, opts为矢量图标的样式 */
        constructor(path: string | SymbolShapeType, opts?: SymbolOptions);

        /**设置矢量图标的路径 */
        setPath(path: string | SymbolShapeType): void;
        /**设置矢量图标的定位点, 该定位点的位置以图标自身为基准 */
        setAnchor(anchor: Size): void;
        /**设置矢量图标的旋转角度, 参数为角度 */
        setRotation(rotation: number): void;
        /**设置矢量图标的缩放比例 */
        setScale(scale: number): void;
        /**设置矢量图标的线宽 */
        setStrokeWeight(strokeWeight: number): void;
        /**设置矢量图标的线填充颜色, 支持颜色常量字符串、十六进制、RGB、RGBA等格式 */
        setStrokeColor(color: string): void;
        /**设置矢量图标线的透明度, opacity范围0~1 */
        setStrokeOpacity(opacity: number): void;
        /**设置矢量图标填充透明度, opacity范围0~1 */
        setFillOpacity(opacity: number): void;
        /**设置矢量图标的填充颜色。支持颜色常量字符串、十六进制、RGB、RGBA等格式 */
        setFillColor(color: string): void;
    }

    /**此类表示Symbol构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。 */
    interface SymbolOptions {
        /**符号的位置偏移值 */
        anchor?: Size;
        /**设置矢量图标的填充颜色。支持颜色常量字符串、十六进制、RGB、RGBA等格式 */
        fillColor?: string;
        /**设置矢量图标填充透明度, 范围0~1 */
        fillOpacity?: number;
        /**设置矢量图标的缩放比例 */
        scale?: number;
        /**设置矢量图标的旋转角度, 参数为角度 */
        rotation?: number;
        /**设置矢量图标的线填充颜色, 支持颜色常量字符串、十六进制、RGB、RGBA等格式 */
        strokeColor?: string;
        /**设置矢量图标线的透明度, opacity范围0~1 */
        strokeOpacity?: number;
        /**旋设置线宽。如果此属性没有指定，则线宽跟scale数值相同 */
        strokeWeight?: number;
    }

    /**用于在地图上绘制自定义的canvas2D或WebGL图形。 */
    class CanvasLayer extends Overlay {
        /**创建一个CanvasLayer实例，每个实例都是一个单独的canvas标签即单独的一层。可以为同一个地图添加多层的CanvasLayer叠加。 */
        constructor(opts?: CanvasLayerOptions);
    }
    /**此类表示CanvasLayer构造函数的可选参数。它没有构造函数，但可以通过对象字面量形式标识。 */
    interface CanvasLayerOptions {
        /**对应canvas的css z - index属性，当添加了多个CanvasLayer时，可以用于设置层叠顺序 */
        zIndex?: number;
        /**CanvasLayer位于的覆盖物层级，例：paneName: floatPane。JSAPI把地图覆盖物分为了8个层级，顶层为'floatPane'， 低层为'vertexPane'。可以通过Map实例的getPanes()方法，获取到8个层级的名称 */
        paneName?: string;
        /**具体的绘制逻辑。通过this.canvas获取当前的canvas对象 */
        update?: Function;
    }

    //#endregion //覆盖物类


    //#region 右键菜单类

    /**此类表示右键菜单。您可以在地图上添加自定义内容的右键菜单。 */
    class ContextMenu {
        /**创建一个右键菜单实例 */
        constructor();

        /**添加菜单项 */
        addItem(item: MenuItem): void;
        /**返回指定索引位置的菜单项，第一个菜单项的索引为0 */
        getItem(index: number): MenuItem;
        /**移除菜单项 */
        removeItem(item: MenuItem): void;
        /**添加分隔符 */
        addSeparato(): void;
        /**移除指定索引位置的分隔符，第一个分隔符的索引为0 */
        removeSeparator(index: number): void;

        /**添加事件监听函数 */
        addEventListener(event: string, handler: (e: ContextMenuEvent) => void): void;
        /**移除事件监听函数 */
        removeEventListener(event: string, handler: (e: ContextMenuEvent) => void): void;

        /**右键菜单打开时触发，事件参数point和pixel分别表示菜单开启时的地理和像素坐标点 */
        open: (event: { type, target, point, pixel }) => void;
        /**右键菜单关闭时触发，事件参数point和pixel分别表示菜单开启时的地理和像素坐标点 */
        close: (event: { type, target, point, pixel }) => void;
    }

    interface ContextMenuEvent {
        type: Overlay;
        target: ContextMenu;
        point?: Point;
        pixel?: Pixel;
        //overlay?: Overlay;
        //zoom?: number;
        //size?: Size;
    }

    /**此类表示一个菜单项。 */
    class MenuItem {
        /**创建一个菜单项。当菜单项被点击时，系统将会以当前菜单弹出的地理坐标点作为参数调用回调函数callback */
        constructor(text: string, callback: (point: Point) => void, opts?: MenuItemOptions);

        /**设置菜单项显示的文本 */
        setText(text: string): void;
        /**设置菜单项的icon */
        setIcon(iconUrl: string): void;
        /**启用菜单项 */
        enable(): void;
        /**禁用菜单项 */
        disable(): void;
    }

    /**此类表示MenuItem构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。 */
    interface MenuItemOptions {
        /**指定此菜单项的宽度，菜单以最长的菜单项宽度为准 */
        width?: number;
        /**指定此菜单项dom的id */
        id?: string;
        /**指定此菜单项的icon URL（大小为17px * 17px） */
        iconUrl?: string | ContextMenuIcon;
    }

    //#endregion //右键菜单类

    //#region 地图类型类

    /**此类表示一种地图类型，您可以通过实例化此类自定义地图类型。 */
    class MapType {
        constructor(name: string, layers: TileLayer | TileLayer[], options?: MapTypeOptions);

        /**返回地图类型名称 */
        getName(): string;
        /**返回地图类型对应的图层 */
        getTileLayer(): TileLayer;
        /**返回地图类型允许的最小级别 */
        getMinZoom(): number;
        /**返回地图类型允许的最大级别 */
        getMaxZoom(): number;
        /**返回地图类型所使用的投影实例 */
        getProjection(): Projection;
        /**返回地图类型对应的前景色 */
        getTextColor(): string;
        /**返回地图类型的提示说明，用于在地图类型控件中提示 */
        getTips(): string;
    }

    /**此类是MapType构造函数的可选参数，不能实例化，通过对象字面量形式表示。 */
    interface MapTypeOptions {
        /**该类型地图的最小级别 */
        minZoom?: number;
        /**该类型地图的最大级别 */
        maxZoom?: number;
        /**当没有图块时所显示的错误图片地址。默认为透明图 */
        errorImageUrl?: string;
        /**地图类型对应的前景色 */
        textColor?: number;
        /**提示说明信息，用于在地图类型控件中进行提示 */
        tips?: string;
    }

    /**此类表示地图投影抽象基类，不可实例化，但可通过MapType的getProjection方法获得。 */
    abstract class Projection {
        /**抽象，根据球面坐标获得平面坐标 */
        abstract lngLatToPoint(lngLat: Point): Pixel;
        /**抽象，根据平面坐标获得球面坐标 */
        abstract pointToLngLat(point: Pixel): Point;
    }

    /**此类表示街道地图投影类，一般通过MapType的getProjection方法获得实例。 */
    interface MercatorProjection {
        /**根据球面坐标获得平面坐标 */
        lngLatToPoint(lngLat: Point): Pixel;
        /**根据平面坐标获得球面坐标 */
        pointToLngLat(point: Pixel): Point;
    }

    /**此类表示透视地图投影类，一般通过MapType的getProjection方法获得实例。 */
    interface PerspectiveProjection {
        /**根据球面坐标获得平面坐标 */
        lngLatToPoint(lngLat: Point): Pixel;
        /**根据平面坐标获得球面坐标 */
        pointToLngLat(point: Pixel): Point;
    }

    //#endregion //地图类型类

    //#region 地图图层类

    /**此类表示一个地图图层，您可以向地图中添加自定义图层。 */
    class TileLayer {
        constructor(opts?: TileLayerOptions);

        /**抽象。向地图返回地图图块的网址，图块索引由tileCoord的x和y属性在指定的缩放级别zoom提供。如果您在TileLayerOptions中提供了tileUrlTemplate参数，则可不实现此接口 */
        getTilesUrl(tileCoord: Pixel, zoom: number): string;
        /**返回地图图层数据的版权对象 */
        getCopyright(): Copyright | null;
        /**如果图层所用的图片为PNG格式并且包含透明信息，则返回true */
        isTransparentPng(): number;
    }

    /**此类表示TileLayer构造函数的可选参数 */
    interface TileLayerOptions {
        /**是否使用了带有透明信息的PNG。由于IE6不支持PNG透明，因此需要特殊处理 */
        transparentPng?: boolean;
        /**指定图块网址模板，该模板可以针对每个图块请求而展开，以根据现有的图块坐标系引用唯一的图块。模板的格式应该为：http://yourhost/tile?x={X}&y={Y}&z={Z}.png 其中X和Y分别指纬度和经度图块坐标，Z指缩放级别，比如： http://yourhost/tile?x=3&y=27&z=5.png 如果您没有提供图块网址模板，您需要实现TileLayer.getTileUrl()抽象方法 */
        tileUrlTemplate?: string;
        /**地图图层的版权信息 */
        copyright?: Copyright;
        /**图层的zIndex */
        zIndex?: number;
    }

    /**此类表示交通流量图层 */
    class TrafficLayer {
        /**创建交通流量图层。参数：opts: TrafficLayerOptions，可选 options 参数指定应作为对象常量传递。如果可选参数提供predictDate，则将显示预测流量。否则显示实时流量 */
        constructor(opts?: TrafficLayerOptions);
    }

    /**此类是TrafficLayer构造函数的可选参数，没有构造函数，不能实例化。 */
    interface TrafficLayerOptions {
        /**预测日期 */
        predictDate: PredictDate;
    }

    /**此类表示交通流量的预测日期，没有构造函数，通过对象字面量形式表示。 */
    interface PredictDate {
        /**预测日期，取值1到7，表示周一到周日 */
        weekday?: number;
        /**预测小时数，取值0到23，表示当日的0点到23点 */
        hour?: number;
    }

    /**CustomLayer是用户自定义底图层，现阶段主要为LBS云麻点功能展现服务。 */
    class CustomLayer {
        /**创建自定义底图层 */
        constructor(opts?: CustomLayerOptions);

        addEventListener(eventName: string, eventHandler: (e: CustomLayerEvent) => void): void;
        removeEventListener(eventName: string, eventHandler: (e: CustomLayerEvent) => void): void;

        /**点击热区触发，content即为lbs云详情检索的所有字段，参考http://developer.baidu.com/map/lbs-geosearch.htm#.search.detail */
        hotspotclick: (event: { type, target, content }) => void;
    }

    interface CustomLayerEvent {
        type: Overlay;
        target: CustomLayer;
        content: any;
        //point?: Point;
        //pixel?: Pixel;
        //overlay?: Overlay;
        //zoom?: number;
        //size?: Size;
    }

    /**此类表示CustomLayer构造函数的可选参数。 */
    interface CustomLayerOptions {
        /**使用云检索v1版本的databoxId */
        databoxId?: string;
        /**使用云检索v2版本的geotableId */
        geotableId?: string;
        /**检索关键字 */
        q?: string;
        /**空格分隔的多字符串 */
        tags?: string;
        /**过滤条件, 参考http://developer.baidu.com/map/lbs-geosearch.htm#.search.nearby */
        filter?: string;
        /**麻点密度常量 */
        pointDensityType?: PointDensityType;
    }

    /**此类表示点击麻点图返回的，没有构造函数，通过对象字面量形式表示。 */
    interface CustomPoi {
        /**返回数据的id */
        poiId?: string;
        /**数据集的id */
        databoxId?: string;
        /**结果的名称标题 */
        title?: string;
        /**地址 */
        address?: string;
        /**电话 */
        phoneNumber?: string;
        /**邮政编码 */
        postcode?: string;
        /**结果所在省的编码 */
        provinceCode?: number;
        /**结果所在省的名称 */
        province?: string;
        /**结果所在城市的编码 */
        cityCode?: number;
        /**结果所在城市的名称 */
        city?: string;
        /**结果所在区县的编码 */
        districtCode?: number;
        /**结果所在区县的名称 */
        district?: string;
        /**结果所在的地理位置 */
        point?: Point;
        /**结果的筛选标签 */
        tags?: Array<string>;
        /**结果的类别id */
        typeId?: number;
        /**用户扩展数据，结构根据用户的自定义 */
        extendedData?: JSON;
    }

    /**此图层用来展示全景覆盖的区域。 */
    class PanoramaCoverageLayer extends TileLayer {
        /**创建全景覆盖区域图层的实例 */
        constructor();
    }

    //#endregion //地图图层类

    //#region 服务类

    /**用于位置检索、周边检索和范围检索。 */
    class LocalSearch {
        /**创建一个搜索类实例，其中location表示检索区域，其类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定，且搜索结果的标注将自动加载到地图上，并支持调整地图视野层级；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行 */
        constructor(location: Map | Point | string, opts?: LocalSearchOptions);

        /**根据检索词发起检索。当keyword为数组时将同时执行多关键字的查询，最多支持10个关键字，多关键字自 1.2 版本支持。option: { forceLocal: Boolean, customData: CustomData } forceLocal表示是否将搜索范围约束在当前城市，customData表示检索lbs云服务的数据 */
        search(keyword: string | string[], option?: Object): void;
        /**根据范围和检索词发起范围检索。当keyword为数组时将同时执行多关键字检索，最多支持10个关键字，多关键字自 1.2 版本支持。option: { customData: CustomData } customData表示检索lbs云服务的数据 */
        searchInBounds(keyword: string | string[], bounds: Bounds, option?: Object): void;
        /**根据中心点、半径与检索词发起周边检索。当keyword为数组时将同时执行多关键字的检索，最多支持10个关键字，多关键字自 1.2 版本支持。当center为字符串时，半径参数将忽略。注意：Point类型的中心点自 1.1 版本支持。option: { customData: CustomData } customData表示检索lbs云服务的数据 */
        searchNearby(keyword: string | string[], center: LocalResultPoi | string | Point, radius: number, option?: Object): void;
        /**返回最近一次检索的结果。如果是多关键字范围检索，则返回一个LocalResult的数组，数组中的结果顺序和范围检索中多关键字数组中顺序一致 */
        getResults(): LocalResult | LocalResult[];
        /**清除最近一次检索的结果 */
        clearResults(): void;
        /**检索特定页面的结果 */
        gotoPage(page: number): void;
        /**启用根据结果自动调整地图层级，当指定了搜索结果所展现的地图时有效 */
        enableAutoViewport(): void;
        /**禁用根据结果自动调整地图层级 */
        disableAutoViewport(): void;
        /**启用自动选择第一个检索结果 */
        enableFirstResultSelection(): void;
        /**禁用自动选择第一个检索结果 */
        disableFirstResultSelection(): void;
        /**设置检索范围，参数类型可以为地图实例、坐标点或字符串。例：setLocation("北京市") */
        setLocation(location: Map | Point | string): void;
        /**设置每页容量，取值范围：1 - 100，对于多关键字检索，每页容量表示每个关键字返回结果的数量（例如当用2个关键字检索时，实际结果数量范围为：2 - 200）。此值只对下一次检索有效 */
        setPageCapacity(): void;
        /**返回每页容量，对于多关键字检索，返回每个关键字对应的页面容量 */
        getPageCapacity(): number;
        /**设置检索结束后的回调函数。参数：results: LocalResult 或 Array 如果是多关键字检索，回调函数参数为LocalResult的数组，数组中的结果顺序和检索中多关键字数组中顺序一致 */
        setSearchCompleteCallback(): void;
        /**设置添加标注后的回调函数。参数： pois: Array，通过marker属性可得到其对应的标注 */
        setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void;
        /**设置标注气泡创建时的回调函数。参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的Dom元素 */
        setInfoHtmlSetCallback(callback: (poi: LocalResultPoi) => void): void;
        /**设置结果列表创建后的回调函数。参数： container: HTMLElement，结果列表所用的HTML元素 */
        setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void;
        /**返回状态码 */
        getStatus(): StatusCodes;
    }

    /**此类表示LocalSearch构造函数的可选参数。 */
    interface LocalSearchOptions {
        /**
         * 结果呈现设置
         * 返回类型：LocalRenderOptions【未找到该类型】
         */
        renderOptions?: any;//LocalRenderOptions;
        /**标注添加完成后的回调函数。 参数： pois: Array，通过marker属性可得到其对应的标注 */
        onMarkersSet?: (pois: LocalResultPoi[]) => void;
        /**标注气泡内容创建后的回调函数。 参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的Dom元素 */
        onInfoHtmlSet?: (poi: LocalResultPoi) => void;
        /**结果列表添加完成后的回调函数。 参数： container: HTMLElement，结果列表所用的HTML元素 */
        onResultsHtmlSet?: (container: HTMLElement) => void;
        /**设置每页容量，取值范围：1 - 100，对于多关键字检索，容量表示每个关键字的数量，如果有2个关键字，则实际检索结果数量范围为：2 - 200 */
        pageCapacity?: number;
        /**检索完成后的回调函数。 参数：results: LocalResult或Array 如果是多关键字检索，回调函数参数返回一个LocalResult的数组，数组中的结果顺序和检索中多关键字数组中顺序一致 */
        onSearchComplete?: (results: LocalResult | LocalResult[]) => void;
    }

    /**此类表示检索lbs云服务的数据。它没有构造函数，但可通过对象字面量形式表示。 要检索lbs云服务的数据，需要在引用api的时候在参数后加上lbs云平台的key。 */
    interface CustomData {
        /**lbs云v2接口，可在lbs云平台上查看自己的geotableId */
        geotableId?: number;
        /**空格分隔的多字符串 */
        tags?: string;
        /**过滤条件，参考：http://developer.baidu.com/map/index.php?title=lbscloud/api/geosearch */
        filter?: string;
    }

    /**此类表示搜索结果呈现的配置。它没有构造函数，但可通过对象字面量形式表示。 */
    interface RenderOptions {
        /**展现结果的地图实例。当指定此参数后，搜索结果的标注、线路等均会自动添加到此地图上 */
        map?: Map;
        /**结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。此属性对LocalCity无效。驾车路线规划无效 */
        panel?: string | HTMLElement;
        /**是否选择第一个检索结果。此属性仅对LocalSearch有效 */
        selectFirstResult?: boolean;
        /**检索结束后是否自动调整地图视野。此属性对LocalCity无效 */
        autoViewport?: boolean;
    }

    /**此类表示LocalSearch的检索结果，没有构造函数，通过LocalSearch.getResults()方法或LocalSearch的onSearchComplete回调函数的参数得到。 */
    interface LocalResult {
        /**本次检索的关键词 */
        keyword: string;
        /**周边检索的中心点（仅当周边检索时提供） */
        center: LocalResultPoi;
        /**周边检索的半径（仅当周边检索时提供） */
        radius: number;
        /**范围检索的地理区域（仅当范围检索时提供） */
        bounds: Bounds;
        /**本次检索所在的城市 */
        city: string;
        /**更多结果的链接，到百度地图进行搜索 */
        moreResultsUrl: string;
        /**本次检索所在的省份 */
        province: string;
        /**搜索建议列表。（当关键词是拼音或拼写错误时给出的搜索建议） */
        suggestions: Array<string>;

        /**返回索引指定的结果。索引0表示第1条结果 */
        getPoi(i: number): LocalResultPoi;
        /**返回当前页的结果数 */
        getCurrentNumPois(): number;
        /**返回总结果数 */
        getNumPois(): number;
        /**返回总页数 */
        getNumPages(): number;
        /**返回页数序号 */
        getPageIndex(): number;
        /**返回城市列表。数组元素对象包含如下属性： city: String，城市名 numResults: Number，结果数 */
        getCityList(): any;//Array<CityList>;
    }

    /**此类表示位置检索或路线规划的一个结果点，没有构造函数，可通过对象字面量形式表示。 */
    interface LocalResultPoi {
        /**结果的名称标题 */
        title?: string;
        /**该结果所在的地理位置 */
        point?: Point;
        /**在百度地图中展示该结果点的详情信息链接 */
        url?: string;
        /**地址（根据数据部分提供）。注：当结果点类型为公交站或地铁站时，地址信息为经过该站点的所有车次 */
        address?: string;
        /**所在城市 */
        city?: string;
        /**电话，根据数据部分提供 */
        phoneNumber?: string;
        /**邮政编码，根据数据部分提供 */
        postcode?: string;
        /**类型，根据数据部分提供 */
        type?: PoiType;
        /**是否精确匹配。只适用LocalSearch的search方法检索的结果 */
        isAccurate?: boolean;
        /**所在省份 */
        province?: string;
        /**POI的标签，如商务大厦、餐馆等。目前只有LocalSearch的回调函数onSearchComplete(result)中的result和Geocoder.getLocation的回调函数的参数GeocoderResult.surroundingPois涉及的LocalResultPoi有tags字段。其他API涉及的LocalResultPoi没有该字段 */
        tags?: string[];
        /**在百度地图详情页面展示该结果点的链接。localsearch的结果中才有 */
        detailUrl?: string;
    }

    /**用于获取公交线路规划方案。 */
    class TransitRoute {
        /**创建一个公交导航实例。location表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会优先在该城市内进行 */
        constructor(location: Map | Point | string, opts?: TransitRouteOptions);

        /**发起检索。 start: 起点，参数可以坐标点或者LocalSearchPoi实例。 end: 终点，参数可以是坐标点或者LocalSearchPoi实例，3.0版本暂不支持起终点参数为关键字，开发者可以先用检索接口确认关键字的坐标点 */
        search(start: Point | LocalResultPoi, end: Point | LocalResultPoi): void;
        /**返回最近一次检索的结果 */
        getResults(): TransitRouteResult;
        /**清除最近一次检索的结果 */
        clearResults(): void;
        /**启用自动调整地图层级，当指定了搜索结果所展现的地图时有效 */
        enableAutoViewport(): void;
        /**禁用自动调整地图层级 */
        disableAutoViewport(): void;
        /**设置每页返回方案个数（1 - 5），默认为5 */
        setPageCapacity(capacity: number): void;
        /**设置城市内换乘策略 */
        setPolicy(policy: TransitPolicy): void;
        /**设置跨城换乘策略 */
        setIntercityPolicy(intercityPolicy: IntercityPolicy): void;
        /**设置跨城交通方式策略 */
        setTransitTypePolicy(transitTypePolicy: TransitTypePolicy): void;
        /**设置检索结束后的回调函数。 参数： results: TransitRouteResult，公交导航结果 */
        setSearchCompleteCallback(callback: (results: TransitRouteResult) => void): void;
        /**设置添加标注后的回调函数。 参数： pois: Array ，起点和目的地数组。 transfers: Array ，公交车站数组 */
        setMarkersSetCallback(callback: (pois: any[], transfers: any[]) => void): void;
        /**设置气泡打开后的回调函数。 参数： poi: LocalResultPoi，表示当前气泡对应的点（可以是起点、终点或换乘车站） html: HTMLElement，气泡内的DOM元素 */
        setInfoHtmlSetCallback(callback: (poi: LocalResultPoi) => void): void;
        /**设置添加路线后的回调函数。 参数： lines: Array ，公交线路数组。 routes: Array ，步行线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物 */
        setPolylinesSetCallback(callback: (lines: any[], routes: any[]) => void): void;
        /**设置结果列表创建后的回调函数。 参数： container: 结果列表所用的HTML元素 */
        setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void;
        /**返回状态码 */
        getStatus(): StatusCodes;
        /**返回线路规划对象类型 */
        toString(): string;
    }

    /**此类表示TransitRoute构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。 */
    interface TransitRouteOptions {
        /**搜索结果的呈现设置 */
        renderOptions?: RenderOptions;
        /**市内公交的策略参数 */
        policy?: TransitPolicy;
        /**跨城公交的换乘策略参数 */
        intercityPolicy?: IntercityPolicy;
        /**跨城公交的交通方式策略参数 */
        transitTypePolicy?: TransitTypePolicy;
        /**返回方案的个数 */
        pageCapacity?: number;
        /**检索完成后的回调函数。参数：results: TransitRouteResult，公交导航结果 */
        onSearchComplete?: (results: TransitRouteResult) => void;
        /**标注添加完成后的回调函数。参数：pois: Array ，起点和目的地数组。transfers: Array ，公交车站数组 */
        onMarkersSet?: (pois: LocalResultPoi[], transfers: any[]) => void;
        /**气泡内容创建后的回调函数。参数：poi: LocalResultPoi，表示当前气泡对应的点（可以是起点、终点或换乘车站）html: HTMLElement，气泡内的DOM元素 */
        onInfoHtmlSet?: (poi: LocalResultPoi, container: HTMLElement) => void;
        /**折线添加完成后的回调函数。参数：lines: Array ，公交线路数组。routes: Array ，步行线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物 */
        onPolylinesSet?: (lines: any[], routes: any[]) => void;
        /**结果列表添加完成后的回调函数。参数：container: 结果列表所用的HTML元素 */
        onResultsHtmlSet?: (container: HTMLElement) => void;
    }

    /**此类表示路线导航的结果，没有构造函数，通过访问TransitRoute.getResults()方法或TransitRoute的onSearchComplete回调函数参数获得。 */
    interface TransitRouteResult {
        /**公交导航策略 */
        policy: TransitPolicy;
        /**跨城策略（仅跨城时有） */
        intercityPolicy: IntercityPolicy;
        /**跨城交通方式策略（仅跨城时有） */
        transitTypePolicy: TransitTypePolicy;

        /**返回起点 */
        getStart(): Promise<LocalResultPoi>;
        /**返回终点 */
        getEnd(): Promise<LocalResultPoi>;
        /**返回方案个数 */
        getNumPlans(): Promise<number>;
        /**返回索引指定的方案。索引0表示第一条方案 */
        getPlan(i: number): Promise<TransitRoutePlan>;
        /**返回公交出行方案的类型（TransitType） */
        getTransitType(): Promise<TransitPlanType>;
    }

    /**此类表示一条公交出行方案。没有构造函数，通过TransitRouteResult.getPlan()方法获得。 */
    interface TransitRoutePlan {
        /**返回方案包含的公交线路段数(如果是跨城检索，还包括飞机、火车、大巴线路) */
        getNumLines(): number;
        /**返回方案包含的某条公交线路(如果是跨城检索，还包括飞机、火车、大巴线路) */
        getLine(i: number): Line;
        /**返回方案包含的步行线路段数 */
        getNumRoutes(): number;
        getRoute(i: Number): any;
        /**返回方案总距离。当format参数为true时，返回方案距离字符串（包含单位），当format为false时，仅返回数值（单位为米）信息。默认参数为true */
        getDistance(format: boolean): string | number;
        /**返回方案总时间。当format参数为true时，返回描述时间的字符串（包含单位），当format为false时，仅返回数值（单位为秒）信息。默认参数为true */
        getDuration(format: boolean): string | number;
        /**返回方案描述文本，默认包含HTML标签。当includeHtml为false时，方案描述不包含HTML标签 */
        getDescription(includeHtml: boolean): string;
        /**返回指定路段的交通方式类型，分别对应Line和Route */
        getTotalType(i: number): TransitPlanType;
        /**返回整个方案包含的某段线路，根据方案的数据情况，返回值可能是步行对象Route也有可能是线路对象Line */
        getTotal(i: number): Route | Line;
        /**总路段数量 */
        getNumTotal(): number;
    }

    /**用于获取步行路线规划方案。 */
    class WalkingRoute {
        /**创建一个步行导航实例。location表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行 */
        constructor(location: Map | Point | string, opts?: WalkingRouteOptions);

        /**发起检索。 start: 起点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例。 end: 终点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例 */
        search(start: string | Point | LocalResultPoi, end: string | Point | LocalResultPoi): void;
        /**返回最近一次检索的结果 */
        getResults(): WalkingRouteResult;
        /**清除最近一次检索的结果 */
        clearResults(): void;
        /**启用自动调整地图层级，当指定了搜索结果所展现的地图时有效 */
        enableAutoViewport(): void;
        /**禁用自动调整地图层级 */
        disableAutoViewport(): void;
        /**设置检索范围，参数类型可以为地图实例、坐标点或字符串。例：setLocation("北京市") */
        setLocation(location: Map | Point | string): void;
        /**设置检索结束后的回调函数。 参数： results: WalkingRouteResult */
        setSearchCompleteCallback(callback: (results: WalkingRouteResult) => void): void;
        /**设置添加标注后的回调函数。 参数： pois: Array，起点和目的地点数组。通过marker属性可得到其对应的标注 */
        setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void;
        /**设置气泡打开后的回调函数。 参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的DOM元素 */
        setInfoHtmlSetCallback(callback: (poi: LocalResultPoi, container: HTMLElement) => void): void;
        /**设置添加路线后的回调函数。 参数： routes: Array，步行线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物 */
        setPolylinesSetCallback(callback: (routes: any[]) => void): void;
        /**设置结果列表创建后的回调函数。 参数： container: 结果列表所用的HTML元素 */
        setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void;
        /**返回状态码 */
        getStatus(): StatusCodes;
        /**返回类型说明 */
        toString(): string;
    }

    /**此类表示WalkingRoute构造函数的可选参数。 */
    interface WalkingRouteOptions {
        /**搜索结果呈现设置 */
        renderOptions?: RenderOptions;
        /**检索完成后的回调函数。 参数： results: WalkingRouteResult */
        onSearchComplete?: (results: WalkingRouteResult) => void;
        /**标注添加完成后的回调函数。 参数： pois: Array，起点和目的地点数组，。通过marker属性可得到其对应的标注 */
        onMarkersSet?: (pois: any[]) => void;
        /**折线添加完成后的回调函数。 参数： routes: Array，步行线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物 */
        onPolylinesSet?: (routes: any[]) => void;
        /**标注气泡内容创建后的回调函数。 参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的DOM元素 */
        onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void;
        /**结果列表添加完成后的回调函数。 参数： container: 结果列表所用的HTML元素 */
        onResultsHtmlSet?: (container: HTMLElement) => void;
    }

    /**此类表示路线导航的结果，没有构造函数，通过访问WalkingRoute.getResults()方法或WalkingRoute的onSearchComplete回调函数参数获得。 */
    interface WalkingRouteResult {
        /**返回起点 */
        getStart(): LocalResultPoi;
        /**返回终点 */
        getEnd(): LocalResultPoi;
        /**返回方案个数 */
        getNumPlans(): number;
        /**返回索引指定的方案。索引0表示第一条方案 */
        getPlan(i: number): RoutePlan;
    }

    /**用于获取骑行路线规划方案。 */
    class RidingRoute {
        /**创建一个骑行导航实例。location表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行 */
        constructor(location: Map | Point | string, opts?: RidingRouteOptions);

        /**发起检索。 start: 起点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例。 end: 终点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例 */
        search(start: string | Point | LocalResultPoi, end: string | Point | LocalResultPoi): void;
        /**返回最近一次检索的结果 */
        getResults(): RidingRouteResult;
        /**清除最近一次检索的结果 */
        clearResults(): void;
        /**启用自动调整地图层级，当指定了搜索结果所展现的地图时有效 */
        enableAutoViewport(): void;
        /**禁用自动调整地图层级 */
        disableAutoViewport(): void;
        /**设置检索范围，参数类型可以为地图实例、坐标点或字符串。例：setLocation("北京市") */
        setLocation(location: Map | Point | string): void;
        /**设置检索结束后的回调函数。 参数： results: RidingRouteResult */
        setSearchCompleteCallback(callback: (results: RidingRouteResult) => void): void;
        /**设置添加标注后的回调函数。 参数： pois: Array，起点和目的地点数组。通过marker属性可得到其对应的标注 */
        setMarkersSetCallback(callback: (pois: any[]) => void): void;
        /**设置气泡打开后的回调函数。 参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的DOM元素 */
        setInfoHtmlSetCallback(callback: (poi: LocalResultPoi, html: HTMLElement) => void): void;
        /**设置添加路线后的回调函数。 参数： routes: Array，骑行线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物 */
        setPolylinesSetCallback(callback: (routes: Route[]) => void): void;
        /**设置结果列表创建后的回调函数。 参数： container: 结果列表所用的HTML元素 */
        setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void;
        /**返回状态码 */
        getStatus(): StatusCodes;
        /**返回类型说明 */
        toString(): string;
    }

    /**此类表示RidingRoute构造函数的可选参数。 */
    interface RidingRouteOptions {
        /**搜索结果呈现设置 */
        renderOptions?: RenderOptions;
        /**检索完成后的回调函数。 参数： results: RidingRouteResult */
        onSearchComplete?: (results: RidingRouteResult) => void;
        /**标注添加完成后的回调函数。 参数： pois: Array，起点和目的地点数组，。通过marker属性可得到其对应的标注 */
        onMarkersSet?: (pois: any[]) => void;
        /**折线添加完成后的回调函数。 参数： routes: Array，骑行线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物 */
        onPolylinesSet?: (routes: any[]) => void;
        /**标注气泡内容创建后的回调函数。 参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的DOM元素 */
        onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void;
        /**结果列表添加完成后的回调函数。 参数： container: 结果列表所用的HTML元素 */
        onResultsHtmlSet?: (container: HTMLElement) => void;
    }

    /**此类表示骑行路线导航的结果，没有构造函数，通过访问RidingRoute.getResults()方法或RidingRoute的onSearchComplete回调函数参数获得。 */
    interface RidingRouteResult {
        /**返回起点 */
        getStart():Promise<LocalResultPoi>;
        /**返回终点 */
        getEnd():Promise<LocalResultPoi>;
        /**返回方案个数 */
        getNumPlans():Promise<number>;
        /**返回索引指定的方案。索引0表示第一条方案 */
        getPlan(i: number):Promise<RoutePlan>;
    }

    /**此类用于获取驾车路线规划方案。 */
    class DrivingRoute {
        /**创建一个驾车导航实例，其中location表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由地图当前的中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行 */
        constructor(location: Map | Point | string, opts?: DrivingRouteOptions);

        /**发起检索。 start: 起点，参数可以是坐标点和LocalSearchPoi实例。 end: 终点，参数可以是坐标点或LocalSearchPoi实例 */
        search(start: Point | LocalResultPoi, end: Point | LocalResultPoi): any;//void;

        /**返回最近一次检索的结果 */
        getResults(): any;//DrivingRouteResult;

        /**清除最近一次检索的结果 */
        clearResults(): void;
        /**启用自动调整地图层级，当指定了搜索结果所展现的地图时有效 */
        enableAutoViewport(): void;
        /**禁用自动调整地图层级 */
        disableAutoViewport(): void;

        /**设置路线规划策略，参数为策略常量 */
        setPolicy(policy: any): void;
        //setPolicy(policy: DrivingPolicy): void;

        /** 设置检索结束后的回调函数。 参数： results: DrivingRouteResult */
        setSearchCompleteCallback(callback: (results: DrivingRouteResult) => void): void;
        /** 设置添加标注后的回调函数。 参数： pois: Array，起点和目的地点数组，通过marker属性可得到其对应的标注 */
        setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void;
        /**设置气泡打开后的回调函数。 参数： poi: LocalResultPoi，通过marker属性可得到当前的标注。html: HTMLElement，气泡内的DOM元素 */
        setInfoHtmlSetCallback(callback: (poi: LocalResultPoi, html: HTMLElement) => void): void;
        /** 设置添加路线后的回调函数。 参数： routes: Array ，驾车线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物 */
        setPolylinesSetCallback(callback: (routes: DrivingRoute[]) => void): void;
        /**
         * 返回状态码
         * 【下面是Web API 2.0规定的返回码】：
         * 0：成功。
         * 1：服务内部错误。
         * 2：参数无效。
         * 7：无返回结果。
         */
        getStatus(): number;//StatusCodes;

        /** 返回类型说明 */
        toString(): string;
    }

    /**此类表示DrivingRoute构造函数的可选参数。 */
    interface DrivingRouteOptions {
        /** 结果呈现设置 */
        renderOptions?: RenderOptions;
        /**驾车策略 */
        policy?: DrivingPolicy;
        /**检索完成后的回调函数。参数： results: DrivingRouteResult */
        onSearchComplete?: (results: DrivingRouteResult) => void;
        /** 标注添加完成后的回调函数。 参数： pois: Array，起点和目的地点数组，通过marker属性可得到其对应的标注 */
        onMarkersSet?: (pois: any[]) => void;
        /** 标注气泡内容创建后的回调函数。 参数： poi: LocalResultPoi，通过marker属性可得到当前的标注。html: HTMLElement，气泡内的DOM元素 */
        onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void;
        /** 折线添加完成后的回调函数。 参数： routes: Array，驾车线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物 */
        onPolylinesSet?: (routes: any[]) => void;
    }

    /**此类表示路线导航的结果，没有构造函数，通过DrivingRoute.getResults()方法或DrivingRoute的onSearchComplete回调函数参数获得。 */
    interface DrivingRouteResult {
        /** 驾车导航策略 */
        policy: any;//DrivingPolicy;

        /** 返回起点 */
        getStart(): any;//LocalResultPoi;
        /** 返回终点 */
        getEnd(): any;//LocalResultPoi;
        /** 返回方案个数 */
        getNumPlans(): number;
        /**返回索引指定的方案。索引0表示第一条方案 */
        getPlan(i: Number): any;//RoutePlan;
    }

    /**此类表示出租车费用信息，没有构造函数，通过对象字面量形式表示。 */
    interface TaxiFare {
        /** 白天费用 */
        day?: TaxiFareDetail;
        /** 夜间费用。注意，部分城市没有夜间费用，此时此属性为null，且同时白天费用表示全天费用 */
        night?: TaxiFareDetail;
        /** 出租车里程，单位为米 */
        distance?: number;
        /** 出租车备注信息 */
        remark?: string;
    }

    /**此类表示出租车具体费用信息，没有构造函数，通过对象字面量形式表示。 */
    interface TaxiFareDetail {
        /** 出租车起步价 */
        initialFare?: number;
        /** 出租车单价 */
        unitFare?: number;
        /** 出租车费用总价 */
        totalFare?: number;
    }

    /**此类表示一条驾车、步行或骑行出行方案。它没有构造函数，可通过DrivingRouteResult.getPlan()方法或WalkingRouteResult类的getPlan()方法获得。 */
    interface RoutePlan {
        /** 返回方案包含的线路的个数 */
        getNumRoutes(): number;
        /** 返回方案中索引指定的线路。索引0表示第一条线路 */
        getRoute(i: number): Route;
        /** 返回方案总距离。当format参数为true时，返回方案距离字符串（包含单位），当format为false时，仅返回数值（单位为米）信息。默认参数为true */
        getDistance(format: boolean): string | number;
        /** 返回方案总时间。当format参数为true时，返回描述时间的字符串（包含单位），当format为false时，仅返回数值（单位为秒）信息。默认参数为true */
        getDuration(format: boolean): string | number;
    }

    /**此类表示一条驾车、步行或骑行路线。 */
    interface Route {
        /** 返回路线包含的关键点个数 */
        getNumSteps(): number;
        /** 返回索引指定的关键点，驾车和步行适用。索引0表示第一个关键点 */
        getStep(i: number): Step;
        /** 返回路线距离，当format为false时仅返回数值 */
        getDistance(format: boolean): string | number;
        /** 返回本路线在方案中的索引位置 */
        getIndex(): number;
        /** 返回路线对应的覆盖物，仅当结果自动添加到地图上时有效 */
        getPolyline(): Polyline;
        /** 返回路线的地理坐标点数组 */
        getPath(): Array<Point>;
        /** 返回路线类型，可区分是驾车还是步行线路 */
        getRouteType(): RouteType;
    }

    /**此类表示驾车、步行或骑行路线中的一个关键点。它没有构造函数，通过Route.getStep()方法获得。 */
    interface Step {
        /** 返回关键点地理坐标 */
        getPosition(): Point;
        /** 返回本关键点在路线中的位置索引 */
        getIndex(); number;
        /** 返回关键点描述文本，默认包含HTML标签。当includeHtml为false时，描述文本不包含HTML标签。不支持驾车路线规划 */
        getDescription(includeHtml: boolean): string;
        /** 返回到下一个关键点的距离，当format为false时仅返回数值（单位为米） */
        getDistance(format: boolean): string | number;
    }

    /**类用于获取用户的地址解析。 */
    class Geocoder {
        /** 创建一个地址解析器的实例 */
        constructor();

        /** 对指定的地址进行解析。如果地址定位成功，则以地址所在的坐标点Point为参数调用回调函数。否则，回调函数的参数为null。city为地址所在的城市名，例如“北京市” */
        getPoint(address: string, callback: null | ((point: Point) => void), city: string): void;
        /** 对指定的坐标点进行反地址解析。如果解析成功，则回调函数的参数为GeocoderResult对象，否则回调函数的参数为null */
        getLocation(point: Point, callback: null | ((geocoderResult: GeocoderResult) => void), options?: LocationOptions): void;
    }

    /**此类表示Geocoder的地址解析结果。它在地址解析的回调函数的参数中返回，不可实例化。 */
    interface GeocoderResult {
        /** 坐标点 */
        point?: Point;
        /** 地址描述 */
        address?: string;
        /** 结构化的地址描述 */
        addressComponents?: AddressComponent;
        /** 附近的POI点 */
        surroundingPois?: Array<LocalResultPoi>;
        /** 商圈字段，代表此点所属的商圈 */
        business?: string;
    }

    /**此类表示地址解析结果的层次化地址信息，没有构造函数，通过对象字面量形式表示。 */
    interface AddressComponent {
        /** 门牌号码 */
        streetNumber?: string;
        /** 街道名称 */
        street?: string;
        /** 区县名称 */
        district?: string;
        /** 城市名称 */
        city?: string;
        /** 省份名称 */
        province?: string;
    }

    /**此类表示Geocoder的地址解析请求的可选参数。它不可实例化。 */
    interface LocationOptions {
        /** 附近POI所处于的最大半径，默认为100米 */
        poiRadius?: number;
        /** 返回的POI点个数，默认为10个。取值范围 */
        numPois?: number;
    }

    /**此类用于获取用户所在的城市位置信息。(根据用户IP自动定位到城市) */
    class LocalCity {
        /** 创建一个获取本地城市位置的实例 */
        constructor(opts?: LocalCityOptions);

        /** 当获取城市信息后，回调函数会被调用，其参数为类型为LocalCityResult对象 */
        get(callback: (localCityResult: LocalCityResult) => void): void;
    }

    /**此类表示LocalCity的可选参数。它没有构造函数，但可通过对象字面量表示。 */
    interface LocalCityOptions {
        /** 结果呈现设置，当给定map参数时，改地图将自动将视野定位到当前城市 */
        renderOptions: RenderOptions;
    }

    /**此类表示LocalCity的定位结果。 */
    interface LocalCityResult {
        /** 城市所在中心点 */
        center?: Point;
        /** 展示当前城市的最佳地图级别，如果您在使用此对象时提供了map实例，则地图级别将根据您提供的地图大小进行调整 */
        level?: number;
        /** 城市名称 */
        name?: string;
    }

    /**返回用户当前的位置，会首先调用浏览器自带的定位接口，如果失败或不支持则调用高精IP定位（需要开通权限，否则调用普通定位）接口，如果用户拒绝授权定位，则无法返回任何定位结果。 */
    class Geolocation {
        /** 创建Geolocation对象实例 */
        constructor();

        /** 返回用户当前位置。定位完成时（包括成功、失败、超时等情况），回调参数为GeolocationResult对象，否则为null */
        getCurrentPosition(callback: (geolocationResult: GeolocationResult | null) => void, opts?: PositionOptions): void;
        /** 定位完成后的状态码。分为BMAP_STATUS_SUCCESS，BMAP_STATUS_UNKNOWN_LOCATION，BMAP_STATUS_PERMISSION_DENIED，BMAP_STATUS_TIMEOUT */
        getStatus(): StatusCodes;
        /** 开启SDK辅助定位，仅当使用环境为移动web混合开发，且开启了定位sdk辅助定位功能后生效 */
        enableSDKLocation(): void;
        /** 关闭SDK辅助定位 */
        disableSDKLocation(): void;
    }

    /**此类作为Geolocation的getCurrentPosition方法的回调函数参数，不可实例化。 */
    interface GeolocationResult {
        /** 定位坐标点 */
        point?: Point;
        /** 定位精度，单位为米 */
        accuracy?: number;
        /** 根据定位坐标点解析出的地址信息，可能为空（3.0新增） */
        address?: AddressComponent;
    }

    /**此类为getCurrentPosition的可选参数，不能实例化。 */
    interface PositionOptions {
        /** 是否要求浏览器获取最佳效果，同浏览器定位接口参数。默认为false */
        enableHighAccuracy?: boolean;
        /** 超时事件，单位为毫秒。默认为10秒 */
        timeout?: number;
        /** 允许返回指定事件内的缓存结果，单位为毫秒。如果为0，则每次请求都获取最新的定位结果。默认为10分钟 */
        maximumAge?: number;
        /** 是否开启SDK辅助定位 */
        SDKLocation?: boolean;
    }

    /**公交路线搜索类。 */
    class BusLineSearch {
        /** 创建公交线搜索类。其中location表示检索区域，其类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行 */
        constructor(location: Map | Point | string, options?: BusLineSearchOptions);

        /** 在用户配置的回调函数中返回公交列表结果，其类型为BusListResult */
        getBusList(keyword: string): void;
        /** 在用户配置的回调函数中返回该条线路的公交信息，其类型为BusLine类型 */
        getBusLine(busLstItem: BusListItem): void;
        /** 清除本次公交线检索结果 */
        clearResults(): void;
        /** 启用自动调整地图视野功能 */
        enableAutoViewport(): void;
        /** 禁用自动调整地图视野功能 */
        disableAutoViewport(): void;
        /** 设置检索范围，参数类型可以为地图实例、坐标点或字符串。例：setLocation("北京市") */
        setLocation(location: Map | Point | string): void;
        /** 返回状态码 */
        getStatus(): StatusCodes;
        /** 返回类型说明 */
        toString(): string;
        /** 设置公交列表查询后的回调函数。参数：rs: BusListResult类型 */
        setGetBusListCompleteCallback(callback: (rs: BusListResult) => void): void;
        /** 设置公交线路查询后的回调函数。参数：rs: BusLine类型 */
        setGetBusLineCompleteCallback(callback: (rs: BusLine) => void): void;
        /** 公交列表结果页渲染后回调函数。参数：container: HTMLElement，结果列表所用的HTML元素 */
        setBusListHtmlSetCallback(callback: (container: HTMLElement) => void): void;
    }

    /**此类表示BusLineSearch类的可选参数，没有构造参数，可以通过对象字面量表示 */
    interface BusLineSearchOptions {
        /** RenderOptions结果呈现设置 */
        renderOptions?: RenderOptions;
        /** 设置公交列表查询后的回调函数.参数：rs: BusListResult类型 */
        onGetBusListComplete?: (rs: BusListResult) => void;
        /** 设置公交线路查询后的回调函数.参数：rs: BusLine类型 */
        onGetBusLineComplete?: (rs: BusLine) => void;
        /** 公交列表结果页渲染后回调函数.参数：container: HTMLElement，结果列表所用的HTML元素 */
        onBusListHtmlSet?: (container: HTMLElement) => void;
        /** 公交线路结果页渲染后回调函数.参数：container: HTMLElement，结果列表所用的HTML元素 */
        onBusLineHtmlSet?: (container: HTMLElement) => void;
        /** 添加公交线时候回调函数.参数：ply: Polyline 公交线路几何对象 */
        onPolylinesSet?: (ply: Polyline) => void;
        /** 添加公交站点时候回调函数.参数：sts: Array公交站坐标组成的Marker对象数组 */
        onMarkersSet?: (sts: any[]) => void;
    }

    /**公交列表查询成功回调函数的参数对象 */
    interface BusListResult {
        /** 本次检索关键字 */
        keyword?: string;
        /** 本次检索所在城市 */
        city?: string;
        /** 到百度地图查看url */
        moreResultsUrl?: string;

        /** 公交列表个数 */
        getNumBusList(): number;
        /** 获取某一个具体的公交列表中的对象。0表示上行，1表示下行 */
        getBusListItem(i: number): BusListItem;
    }

    /**表示公交线路结果的公交线，没有构造函数，通过检索回调函数获得。 */
    interface BusLine {
        /** 线路名称 */
        name?: string;
        /** 首班车时间 */
        startTime?: string;
        /** 末班车时间 */
        endTime?: string;
        /** 公交线路所属公司 */
        company?: string;

        /** 获取公交站点个数 */
        getNumBusStations(): number;
        /** 获取某一个具体的公交站对象 */
        getBusStation(i: number): BusStation;
        /** 返回公交线地理坐标点数组 */
        getPath(): Array<Point>;
        /** 获取公交线几何对象, 仅当结果自动添加到地图上时有效 */
        getPolyline(): Polyline;
    }

    /**此类表示一条公交线路，如果是跨城检索，还有可能表示一条飞机、火车或大巴线路。没有构造函数，通过TransitRoutePlan.getLine()方法得到。 */
    interface Line {
        /** 线路全称 */
        title?: string;
        /** 线路类型 */
        type?: LineType;

        /** 返回公交线路途径的车站个数，仅在公交和地铁类型有效 */
        getNumViaStops(): number;
        /** 返回上车站 */
        getGetOnStop(): LocalResultPoi;
        /** 返回下车站 */
        getGetOffStop(): LocalResultPoi;
        /** 返回线路对应的地理坐标点数组，在公交方案中，地理坐标只给出方案涉及的部分 */
        getPath(): Array<Point>;
        /** 返回公交线路对应的折线覆盖物 */
        getPolyline(): Polyline;
        /** 当format为true时，返回本段公交线路的距离字符串（包含单位），当format为false时仅返回数值（单位为米）。默认参数为true */
        getDistance(format: boolean): string | number;
    }

    /**一个具体公交对象 */
    interface BusListItem {
        /** 公交线名称 */
        name: string;
    }

    /**公交站点对象 */
    interface BusStation {
        /** 站点名称 */
        name?: string;
        /** 站点坐标 */
        position?: Point;
    }

    /**Autocomplete是结果提示、自动完成类。 */
    class Autocomplete {
        /** 创建自动完成的实例 */
        constructor(options?: AutocompleteOptions);

        /** 显示提示列表 */
        show(): void;
        /** 隐藏提示列表 */
        hide(): void;
        /** 修改请求数据类型。types定义方法详见AutocompleteOptions */
        setTypes(types: any[]): void;
        /** 设置检索区域 */
        setLocation(location: string | Map | Point): void;
        /** 发起某个关键字的提示请求，会引起onSearchComplete的回调 */
        search(keywords: string): void;
        /** 获取结果列表 */
        getResults(): AutocompleteResult;
        /** 设置绑定的input控件的值，且不会出现下拉列表 */
        setInputValue(keyword: string): void;
        /** 销毁自动完成对象 */
        dispose(): void;


        //addEventListener(eventName: string, eventHandler: (e: any) => void): void;
        //removeEventListener(eventName: string, eventHandler: (e: any) => void): void;


        /** 回车选中某条记录后触发
         * item : { index: 1【高亮的记录，所属返回结果的index】
         * value: {}【结果数据，见AutocompleteResultPoi】}
         */
        onconfirm: (event: { type, target, item }) => void;
        /**
         * 键盘或者鼠标移动，某条记录高亮之后，
         * 触发 fromitem: {
         *  【上一条记录的信息】
         *  index: 2【高亮的记录，所属返回结果的index】,
         *  value: {}【结果数据，见AutocompleteResultPoi】},
         *  toitem: {【当前记录的信息，与fromitem结构一致】}
         */
        onhighlight: (event: { type, target, fromitem, toitem }) => void;
    }

    /**本类是Autocomplete类的可选参数对象 */
    interface AutocompleteOptions {
        /** 设定返回结果的所属范围。例如“北京市” */
        location?: string | Map | Point;
        /** 返回数据类型。两种设置方式，第一种为默认值（即设置值为空），将返回所有数据。如地图初始化为北京，在输入框中输入“小”，输入框下会出现包含“小”关键字的多种类型（如餐饮、地名等）的提示词条。第二种设置值为"city"，将返回省市区县乡镇街道地址类型数据。如地图初始化为北京，在输入框中输入“小”，输入框下会出现“小金县”的地点名称类的提示词条 */
        types?: Array<string>;
        /** 在input框中输入字符后，发起列表检索，完成后的回调函数。 参数：AutocompleteResult */
        onSearchComplete?: (autocompleteResult: AutocompleteResult) => void;
        /** 文本输入框元素或其id */
        input?: string | HTMLElement;
    }

    /**自动完成类获取的单个POI点的信息 */
    interface AutocompleteResultPoi {
        /** 省名 */
        province?: string;
        /** 城市名 */
        city?: string;
        /** 区县名称 */
        district?: string;
        /** 街道名称 */
        street?: string;
        /** 门牌号码 */
        streetNumber?: string;
        /** 商户名 */
        business?: string;
    }

    /**自动完成检索完成回调函数的参数对象 */
    interface AutocompleteResult {
        /** 检索关键字 */
        keyword: string;

        /**结果数组 */
        getPoi(i: number): AutocompleteResultPoi;
        /** 结果总数 */
        getNumPois(): number;
    }

    /**此类表示一个行政区域的边界。 */
    class Boundary {
        /** 创建行政区域搜索的对象实例 */
        constructor();

        /**
         * 返回行政区域的边界。
         * name: 查询省、直辖市、地级市、或县的名称。
         * callback: 执行查询后，数据返回到客户端的回调函数，数据以回调函数的参数形式返回。返回结果是一个数组，数据格式如下：
         * arr[0] = "x1, y1; x2, y2; x3, y3; ..." arr[1] = "x1, y1; x2, y2; x3, y3; ..." arr[2] = "x1, y1; x2, y2; ..." … 否则回调函数的参数为null
         */
        get(name: string, callback: any): void;
    }

    /**用于将其他坐标系的坐标转换为百度坐标。 */
    class Convertor {
        /** 创建一个坐标转换的实例 */
        constructor();

        /**
         * 对指定的点数组进行坐标转换（一次最多指定10个点），转换规则为从from到to，转换完成后调用callback。
         * from和to的含义请参照Web服务API。
         * 【下面是百度Web服务API 2.0 from的规定】：
         * 1：GPS设备获取的角度坐标，wgs84坐标。
         * 2：GPS获取的米制坐标、sogou地图所用坐标。
         * 3：google地图、soso地图、aliyun地图、mapabc地图和amap地图所用坐标，国测局（gcj02）坐标。
         * 4：上面3中列表地图坐标对应的米制坐标。
         * 5：百度地图采用的经纬度坐标。
         * 6：百度地图采用的米制坐标。
         * 7：mapbar地图坐标。
         * 8：51地图坐标。
         * 【下面是百度Web服务API 2.0 to的规定】：
         * 5：bd09ll(百度经纬度坐标)。
         * 6：bd09mc(百度米制经纬度坐标)。
         *
         * @param points 一次最多指定10个点。
         * @param from 数字1到8之一。
         * @param to 5或者6。
         * @param callback 回调函数【回调结果见TranslateResults接口】
         */
        translate(points: Point[], from: number, to: number, callback: (t: TranslateResults) => void): void;
    }

    /**此类是Convertor.translate()中回调函数的参数。 */
    interface TranslateResults {
        /**
         * 转换结果状态码【百度Web服务API 2.0的规定】：
         * 0：正常。
         * 1：内部错误。
         * 4：转换失败【X→GPS时必现，根据法律规定，不支持将任何类型的坐标转换为GPS坐标】。
         * 21：from非法。
         * 22：to非法。
         * 24：coords格式非法。
         * 25：coords个数非法，超过限制。
         * 26：参数错误。
         */
        status: number;
        /** 转换完成的点数组，点顺序和转换前一致 */
        points: Point[];
    }

    //#endregion //服务类

    //#region 全景类
    /**此类用来展示某位置的全景视图，可以单独放置在一个div容器中，也可以放在Map类的容器中。 */
    class Panorama {
        /** 在给定的结点中创建全景 */
        constructor(container: string | HTMLElement, opts?: PanoramaOptions);

        /** 获取全景中道路指示信息 */
        getLinks(): Array<PanoramaLink>;
        /** 获取当前全景的id */
        getId(): string;
        /** 获取当前全景的位置，通过经纬度描述 */
        getPosition(): Point;
        /** 获取当前全景的视角 */
        getPov(): PanoramaPov;
        /** 获取当前全景的级别 */
        getZoom(): number;
        /** 设置全景的id */
        setId(id: string): void;
        /** 设置全景的位置 */
        setPosition(position: Point): void;
        /** 设置全景的视角 */
        setPov(pov: PanoramaPov): void;
        /** 设置全景的级别 */
        setZoom(zoom: number): void;
        /** 开启鼠标滚轮缩放功能。仅对PC上有效 */
        enableScrollWheelZoom(): void;
        /** 关闭鼠标滚轮缩放功能 */
        disableScrollWheelZoom(): void;
        /** 显示全景 */
        show(): void;
        /** 隐藏全景 */
        hide(): void;
        /** 全景场景内添加覆盖物 */
        addOverlay(overlay: PanoramaLabel): void;
        /** 删除全景内的覆盖物 */
        removeOverlay(overlay: PanoramaLabel): void;
        /** 获取全景的类型（室外景返回BMAP_PANORAMA_STREET_SCENE、室内景返回BMAP_PANORAMA_INDOOR_SCENE） */
        getSceneType(): PanoramaSceneType;
        /** 设置全景可配置参数 */
        setOptions(opts: PanoramaOptions): void;
        /** 设置全景外景场景点内可见的POI类型，默认为隐藏所有类型poi */
        setPanoramaPOIType(): PanoramaPOIType;

        // addEventListener(eventName: string, eventHandler: (e: any) => void): void;
        // removeEventListener(eventName: string, eventHandler: (e: any) => void): void;

        /** 全景位置发生变化时触发 */
        position_changed: () => void;
        /** 全景相邻道路发生变化时触发，通常是在位置变化时，异步获取新数据之后触发 */
        links_changed: () => void;
        /** 全景视角发生变化时触发 */
        pov_changed: () => void;
        /** 全景级别发生变化时触发 */
        zoom_changed: () => void;
        /** 全景场景点类型改变（室内景、室外景）时触发 */
        scene_type_changed: () => void;
    }

    /**此类为Panorama类构造函数的可选参数，使用对象字面量形式表示，不可实例化。 */
    interface PanoramaOptions {
        /** 是否显示全景的导航控件，默认为true */
        navigationControl?: boolean;
        /** 是否显示道路指示控件。默认为true */
        linksControl?: boolean;
        /** 是否显示全景室内场景的切换控件，默认为false，仅对室内景生效 */
        indoorSceneSwitchControl?: boolean;
        /** 是否显示相册控件，默认为false */
        albumsControl?: boolean;
        /** 全景相册控件配置参数 */
        albumsControlOptions?: AlbumsControlOptions;
    }

    /**此类用来描述全景中道路指示中相邻全景的信息。使用对象字面量形式表示，不可实例化。 */
    interface PanoramaLink {
        /** 相连全景的描述信息 */
        description: string;
        /** 相连道路的方向，正北方向为0，正东为90，正南为180，正西为270 */
        heading: number;
        /** 相邻全景的id */
        id: string;
    }

    /**此类描述全景的视角。使用对象字面量形式表示，不可实例化。 */
    interface PanoramaPov {
        /** 水平方向的角度，正北方向为0，正东为90，正南为180，正西为270 */
        heading: number;
        /** 竖直方向的角度，向上最大到90度，向下最大到 - 90度。（在某些场景下，俯角可能无法到达最大值） */
        pitch: number;
    }

    /**此类用来检索全景数据信息。 */
    class PanoramaService {
        /** 创建检索全景数据信息类的实例 */
        constructor();

        /** 根据全景id返回全景数据，当获取不到数据时，回调函数参数为null */
        getPanoramaById(id: string, callback: any, data: PanoramaData): void;
        /** 根据坐标及半径返回该范围内的全景数据；不设置半径参数时，默认半径为50米；当获取不到数据时，回调函数参数为null */
        getPanoramaByLocation(point: Point, radius: number, callback: any, data: PanoramaData): void;
    }

    /**通过PanoramaService类检索获得。使用对象字面量形式表示，不可实例化。 */
    interface PanoramaData {
        /** 全景id */
        id?: string;
        /** 全景的描述信息 */
        description?: string;
        /** 全景相邻道路信息 */
        links?: Array<PanoramaLink>;
        /** 全景的地理坐标 */
        position?: Point;
        /** 全景图块信息 */
        tiles?: PanoramaTileData;
    }

    /**此类是图块数据信息，不可实例化。 */
    interface PanoramaTileData {
        /** 整个全景图中心位置的方位（单位角度） */
        centerHeading?: number;
        /** 图块展示的尺寸（单位像素），注意这个尺寸与实际的图片尺寸可能不同 */
        tileSize?: Size;
        /** 整个全景图的尺寸（单位像素） */
        worldSize?: Size;
    }

    /**该类提供在全景中添加标签功能。 */
    class PanoramaLabel {
        /** 在全景中创建一个标签, content参数表示标签的文本内容，opts参数包含标签的经纬度坐标和高度 */
        constructor(content: string, opts?: PanoramaLabelOptions);

        /** 设置标签的经纬度坐标 */
        setPosition(position: Point): void;
        /** 获取标签的经纬度坐标 */
        getPosition(): Point;
        /** 获取标签与全景中心点的视角 */
        getPov(): PanoramaPov;
        /** 设置标签显示内容 */
        setContent(content: string): void;
        /** 获取标签的显示内容 */
        getContent(): string;
        /** 设置标签可见 */
        show(): void;
        /** 设置标签不可见 */
        hide(): void;
        /** 设置标签距离地面的高度 */
        setAltitude(altitude: number): void;
        /** 获取标签距离地面的高度 */
        getAltitude(): number;

        /** 注册事件 */
        addEventListener(): void;
        /** 移除事件 */
        removeEventListener(): void;

        /** 单击标签时触发该事件 */
        click: (type, target) => void;
        /** 鼠标移入标签时触发该事件 */
        mouseover: (type, target) => void;
        /** 鼠标移出标签时触发该事件 */
        mouseout: (type, target) => void;
        /** 删除标签时触发该事件 */
        remove: (type, target) => void;
    }

    /**此类为PanoramaLabel类构造函数的可选参数，使用对象字面量形式表示，不可实例化。 */
    interface PanoramaLabelOptions {
        /** 文本标注的地理位置 */
        position?: Point;
        /** 文本标注在全景场景点中距地面的高度。（javascript全景实现方式暂不支持），默认为2米 */
        altitude?: number;
    }

    /**此类为全景相册控件的可选参数，使用对象字面量形式表示，不可实例化。 */
    interface AlbumsControlOptions {
        /** 相册控件的停靠位置 */
        anchor?: ControlAnchor;
        /** 相册的偏移量 */
        offset?: Size;
        /** 相册控件的最大宽度，可以设置总宽度百分比(例如50 %) 或者像素数字（500）, 默认值为100 % */
        maxWidth?: number | string;
        /** 相册内图片的高度。默认为80px。（为保证图片比例，只设置高度，宽度自如会拉宽） */
        imageHeight?: number;
    }
    //#endregion //全景类
    //}


    //#region 常量【百度API是在全局命名空间中定义的这些常量值，因此无法直接使用这些枚举】
    const enum APIVersion {
        BMAP_API_VERSION
    }

    /** 此常量表示控件的定位 */
    const enum ControlAnchor {
        /** 【ControlAnchor】控件将定位到地图的左上角 */
         BMAP_ANCHOR_TOP_LEFT,
        /**【ControlAnchor】控件将定位到地图的右上角 */
         BMAP_ANCHOR_TOP_RIGHT,
        /**【ControlAnchor】控件将定位到地图的左下角 */
         BMAP_ANCHOR_BOTTOM_LEFT,
        /**【ControlAnchor】控件将定位到地图的右下角 */
         BMAP_ANCHOR_BOTTOM_RIGHT,
    }

    /** 此常量表示平移缩放控件的类型。 */
    const enum NavigationControlType {
        /**【NavigationControlType】标准的平移缩放控件（包括平移、缩放按钮和滑块） */
         BMAP_NAVIGATION_CONTROL_LARGE,
        /**【NavigationControlType】仅包含平移和缩放按钮 */
         BMAP_NAVIGATION_CONTROL_SMALL,
        /**【NavigationControlType】仅包含平移按钮 */
         BMAP_NAVIGATION_CONTROL_PAN,
        /**【NavigationControlType】仅包含缩放按钮 */
         BMAP_NAVIGATION_CONTROL_ZOOM,
    }

    /** 此常量表示长度单位制。*/
    const enum LengthUnit {
        /**【lengthUnit】公制单位 */
         BMAP_UNIT_METRIC,
        /**【lengthUnit】英制单位 */
         BMAP_UNIT_IMPERIAL,
    }

    /**此常量表示MapTypeControl的外观样式。 */
    const enum MapTypeControlType {
        /**【MapTypeControlType】按钮水平方式展示,默认采用此类型展示 */
         BMAP_MAPTYPE_CONTROL_HORIZONTAL,
        /**【MapTypeControlType】按钮呈下拉列表方式展示 */
         BMAP_MAPTYPE_CONTROL_DROPDOWN,
        /**【MapTypeControlType】以图片方式展示类型控件，设置该类型后无法指定maptypes属性 */
         BMAP_MAPTYPE_CONTROL_MAP,
    }

    /**此常量表示标注的动画效果。 */
    const enum Animation {
        /**【Animation】坠落动画 */
         BMAP_ANIMATION_DROP,
        /**【Animation】跳动动画 */
         BMAP_ANIMATION_BOUNCE,
    }

    /** 此常量表示地图展示的类型 */
    const enum MapTypeEnum {
        /**此地图类型展示普通街道视图 */
         BMAP_NORMAL_MAP,
        /**此地图类型展示透视图像视图 */
         BMAP_PERSPECTIVE_MAP,
        /**此地图类型展示卫星视图 */
         BMAP_SATELLITE_MAP,
        /**此地图类型展示卫星和路网的混合视图 */
         BMAP_HYBRID_MAP,
    }

    /**此枚举类型表示矢量图标类预设的图标样式。 */
    const enum SymbolShapeType {
        /**圆形，默认半径为1px */
        BMap_Symbol_SHAPE_CIRCLE,
        /**矩形，默认宽度4px、高度2px */
        BMap_Symbol_SHAPE_RECTANGLE,
        /**菱形，默认外接圆半径10px */
        BMap_Symbol_SHAPE_RHOMBUS,
        /**五角星，五角星外接圆半径为10px */
        BMap_Symbol_SHAPE_STAR,
        /**箭头方向向下的闭合箭头 */
        BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW,
        /**箭头方向向上的闭合箭头 */
        BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW,
        /**箭头方向向下的非闭合箭头 */
        BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW,
        /**箭头方向向上的非闭合箭头 */
        BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW,
        /**定位点图标 */
        BMap_Symbol_SHAPE_POINT,
        /**预设的飞机形状 */
        BMap_Symbol_SHAPE_PLANE,
        /**预设的照相机形状 */
        BMap_Symbol_SHAPE_CAMERA,
        /**预设的警告符号 */
        BMap_Symbol_SHAPE_WARNING,
        /**预设的笑脸形状 */
        BMap_Symbol_SHAPE_SMILE,
        /**预设的钟表形状 */
        BMap_Symbol_SHAPE_CLOCK
    }

    /**此常量表示不同的线路类型。 */
    const enum RouteType {
        /** 驾车线路 */
         BMAP_ROUTE_TYPE_DRIVING,
        /** 步行线路 */
         BMAP_ROUTE_TYPE_WALKING,
        /** 骑行线路 */
         BMAP_ROUTE_TYPE_RIDING,
    }

    /**麻点密度常量 */
    const enum PointDensityType {
        /**麻点密度高 */
         BMAP_POINT_DENSITY_HIGH,
        /**麻点密度中等，默认 */
         BMAP_POINT_DENSITY_MEDIUM,
        /**麻点密度低 */
         BMAP_POINT_DENSITY_LOW,
    }

    /**此枚举类型表示驾车方案的策略配置【全局常数】 */
    const enum DrivingPolicy {
        /** 默认 */
         BMAP_DRIVING_POLICY_DEFAULT,
        /** 高速优先 */
         BMAP_DRIVING_POLICY_FIRST_HIGHWAYS,
        /** 避开高速 */
         BMAP_DRIVING_POLICY_AVOID_HIGHWAYS,
        /** 避开拥堵 */
         BMAP_DRIVING_POLICY_AVOID_CONGESTION,
    }

    /**此枚举常量用于描述对象当前状态。 */
    const enum StatusCodes {
        /** 检索成功。对应数值“0” */
         BMAP_STATUS_SUCCESS,
        /** 城市列表。对应数值“1” */
         BMAP_STATUS_CITY_LIST,
        /** 位置结果未知。对应数值“2” */
         BMAP_STATUS_UNKNOWN_LOCATION,
        /** 导航结果未知。对应数值“3” */
         BMAP_STATUS_UNKNOWN_ROUTE,
        /** 非法密钥。对应数值“4” */
         BMAP_STATUS_INVALID_KEY,
        /** 非法请求。对应数值“5” */
         BMAP_STATUS_INVALID_REQUEST,
        /** 没有权限。对应数值“6” */
         BMAP_STATUS_PERMISSION_DENIED,
        /** 服务不可用。对应数值“7” */
         BMAP_STATUS_SERVICE_UNAVAILABLE,
        /** 超时。对应数值“8” */
         BMAP_STATUS_TIMEOUT,
    }

    /**此常量区分室内场景和室外场景,其中室内景包括酒店内部、景区内部及高校内部等。 */
    const enum PanoramaSceneType {
        /** 全景场景点的类型为室内场景 */
         BMAP_PANORAMA_INDOOR_SCENE,
        /** 全景场景点的类型为室外场景 */
         BMAP_PANORAMA_STREET_SCENE,
    }

    /**此常量表示要在全景内显示的poi类型。 */
    const enum PanoramaPOIType {
        /** 酒店类 */
         BMAP_PANORAMA_POI_HOTE,
        /** 餐饮类 */
         BMAP_PANORAMA_POI_CATERING,
        /** 电影院 */
         BMAP_PANORAMA_POI_MOVIE,
        /** 公交站点 */
         BMAP_PANORAMA_POI_TRANSIT,
        /** 室内景 */
         BMAP_PANORAMA_POI_INDOOR_SCENE,
        /** 无，即隐藏所有的poi类型 */
         BMAP_PANORAMA_POI_NONE,
    }

    /**此枚举类型表示海量点预设的不同形状。 */
    const enum ShapeType {
        /**圆形,为默认形状 */
         BMAP_POINT_SHAPE_CIRCLE,
        /**星形 */
         BMAP_POINT_SHAPE_STAR,
        /**方形 */
         BMAP_POINT_SHAPE_SQUARE,
        /**菱形 */
         BMAP_POINT_SHAPE_RHOMBUS,
        /**水滴状，该类型无size和color属性 */
         BMAP_POINT_SHAPE_WATERDROP,
    }

    /**此枚举类型表示海量点预设的不同尺寸。 */
    const enum SizeType {
        /**定义点的尺寸为超小，宽高为2px * 2px */
         BMAP_POINT_SIZE_TINY,
        /**定义点的尺寸为很小，宽高为4px * 4px */
         BMAP_POINT_SIZE_SMALLER,
        /**定义点的尺寸为小，宽高为8px * 8px */
         BMAP_POINT_SIZE_SMALL,
        /**定义点的尺寸为正常，宽高为10px * 10px，为海量点默认尺寸 */
         BMAP_POINT_SIZE_NORMAL,
        /**定义点的尺寸为大，宽高为16px * 16px */
         BMAP_POINT_SIZE_BIG,
        /**定义点的尺寸为很大，宽高为20px * 20px */
         BMAP_POINT_SIZE_BIGGER,
        /**定义点的尺寸为超大，宽高为30px * 30px */
         BMAP_POINT_SIZE_HUGE,
    }

    /**此类型表示内置的右键菜单图标。 */
    const enum ContextMenuIcon {
        /**放大图标 */
         BMAP_CONTEXT_MENU_ICON_ZOOMIN,
        /**缩小图标 */
         BMAP_CONTEXT_MENU_ICON_ZOOMOUT,
    }

    /**此枚举常量表示地点的类型。 */
    const enum PoiType {
        /**一般位置点 */
         BMAP_POI_TYPE_NORMAL,
        /**公交车站位置点 */
         BMAP_POI_TYPE_BUSSTOP,
        /**地铁车站位置点 */
         BMAP_POI_TYPE_SUBSTOP,
    }

    /**此常量表示市内公交方案换乘策略。 */
    const enum TransitPolicy {
        /**推荐方案 */
         BMAP_TRANSIT_POLICY_RECOMMEND,
        /**最少时间 */
         BMAP_TRANSIT_POLICY_LEAST_TIME,
        /**最少换乘 */
         BMAP_TRANSIT_POLICY_LEAST_TRANSFER,
        /**最少步行 */
         BMAP_TRANSIT_POLICY_LEAST_WALKING,
        /**不乘地铁 */
         BMAP_TRANSIT_POLICY_AVOID_SUBWAYS,
        /**优先地铁 */
         BMAP_TRANSIT_POLICY_FIRST_SUBWAYS,
    }

    /**此常量表示跨城公交换乘策略。 */
    const enum IntercityPolicy {
        /**时间短 */
         BMAP_INTERCITY_POLICY_LEAST_TIME,
        /**出发早 */
         BMAP_INTERCITY_POLICY_EARLY_START,
        /**价格低 */
         BMAP_INTERCITY_POLICY_CHEAP_PRICE,
    }

    /**此常量表示跨城交通方式策略。 */
    const enum TransitTypePolicy {
        /**火车优先 */
         BMAP_TRANSIT_TYPE_POLICY_TRAIN,
        /**飞机优先 */
         BMAP_TRANSIT_TYPE_POLICY_AIRPLANE,
        /**大巴优先 */
         BMAP_TRANSIT_TYPE_POLICY_COACH,
    }

    /**此常量表示出行方案的类型 */
    const enum TransitPlanType {
        /**国内市内换乘 */
         BMAP_TRANSIT_TYPE_IN_CITY,
        /**国内跨城换乘 */
         BMAP_TRANSIT_TYPE_CROSS_CITY,
    }

    /**此枚举类型标识不同类型的交通线路类型，其中包括了市内公交和跨城公交。 */
    const enum LineType {
        /**公交车 */
         BMAP_LINE_TYPE_BUS,
        /**地铁 */
         BMAP_LINE_TYPE_SUBWAY,
        /**轮渡 */
         BMAP_LINE_TYPE_FERRY,
        /**火车 */
         BMAP_LINE_TYPE_TRAIN,
        /**飞机 */
         BMAP_LINE_TYPE_AIRPLANE,
        /**大巴 */
         BMAP_LINE_TYPE_COACH,
    }

    /**此常量用于描述对象当前状态。 */
    const enum HighlightModes {
        /** 驾车结果展现中点击列表后的展现点步骤 */
         BMAP_HIGHLIGHT_STEP,
        /** 驾车结果展现中点击列表后的展现路段 */
         BMAP_HIGHLIGHT_ROUTE,
    }

    //#endregion 百度地图API定义的全局常量

}

//#region 百度地图API定义的全局常量【注意这些常量不能定义在命名空间内】

/**返回当前API版本。例如，1.2版本返回字符串“1.2” */
declare const BMAP_API_VERSION: string;

/**【MapType】此地图类型展示普通街道视图 */
declare const BMAP_NORMAL_MAP;
/**【MapType】此地图类型展示透视图像视图 */
declare const BMAP_PERSPECTIVE_MAP;
/**【MapType】此地图类型展示卫星视图 */
declare const BMAP_SATELLITE_MAP;
/**【MapType】此地图类型展示卫星和路网的混合视图 */
declare const BMAP_HYBRID_MAP;

/** 默认 */
declare const BMAP_DRIVING_POLICY_DEFAULT;
/** 高速优先 */
declare const BMAP_DRIVING_POLICY_FIRST_HIGHWAYS;
/** 避开高速 */
declare const BMAP_DRIVING_POLICY_AVOID_HIGHWAYS;
/** 避开拥堵 */
declare const BMAP_DRIVING_POLICY_AVOID_CONGESTION;

/**控件将定位到地图的左上角 */
declare const BMAP_ANCHOR_TOP_LEFT;
/**控件将定位到地图的右上角 */
declare const BMAP_ANCHOR_TOP_RIGHT;
/**控件将定位到地图的左下角 */
declare const BMAP_ANCHOR_BOTTOM_LEFT;
/**控件将定位到地图的右下角 */
declare const BMAP_ANCHOR_BOTTOM_RIGHT;

/**【NavigationControlType】标准的平移缩放控件（包括平移、缩放按钮和滑块） */
declare const BMAP_NAVIGATION_CONTROL_LARGE;
/**【NavigationControlType】仅包含平移和缩放按钮 */
declare const BMAP_NAVIGATION_CONTROL_SMALL;
/**【NavigationControlType】仅包含平移按钮 */
declare const BMAP_NAVIGATION_CONTROL_PAN;
/**【NavigationControlType】仅包含缩放按钮 */
declare const BMAP_NAVIGATION_CONTROL_ZOOM;


/**【lengthUnit】公制单位 */
declare const BMAP_UNIT_METRIC;
/**【lengthUnit】英制单位 */
declare const BMAP_UNIT_IMPERIAL;


/**按钮水平方式展示，默认采用此类型展示 */
declare const BMAP_MAPTYPE_CONTROL_HORIZONTAL;
/**按钮呈下拉列表方式展示 */
declare const BMAP_MAPTYPE_CONTROL_DROPDOWN;
/**以图片方式展示类型控件，设置该类型后无法指定maptypes属性 */
declare const BMAP_MAPTYPE_CONTROL_MAP;


/**坠落动画 */
declare const BMAP_ANIMATION_DROP;
/**跳动动画 */
declare const BMAP_ANIMATION_BOUNCE;


/**圆形，默认半径为1px */
declare const BMap_Symbol_SHAPE_CIRCLE;
/**矩形，默认宽度4px、高度2px */
declare const BMap_Symbol_SHAPE_RECTANGLE;
/**菱形，默认外接圆半径10px */
declare const BMap_Symbol_SHAPE_RHOMBUS;
/**五角星，五角星外接圆半径为10px */
declare const BMap_Symbol_SHAPE_STAR;
/**箭头方向向下的闭合箭头 */
declare const BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW;
/**箭头方向向上的闭合箭头 */
declare const BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW;
/**箭头方向向下的非闭合箭头 */
declare const BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW;
/**箭头方向向上的非闭合箭头 */
declare const BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW;
/**定位点图标 */
declare const BMap_Symbol_SHAPE_POINT;
/**预设的飞机形状 */
declare const BMap_Symbol_SHAPE_PLANE;
/**预设的照相机形状 */
declare const BMap_Symbol_SHAPE_CAMERA;
/**预设的警告符号 */
declare const BMap_Symbol_SHAPE_WARNING;
/**预设的笑脸形状 */
declare const BMap_Symbol_SHAPE_SMILE;
/**预设的钟表形状 */
declare const BMap_Symbol_SHAPE_CLOCK;


/** 驾车线路 */
declare const BMAP_ROUTE_TYPE_DRIVING;
/** 步行线路 */
declare const BMAP_ROUTE_TYPE_WALKING;
/** 骑行线路 */
declare const BMAP_ROUTE_TYPE_RIDING;


/**麻点密度高 */
declare const BMAP_POINT_DENSITY_HIGH;
/**麻点密度中等，默认 */
declare const BMAP_POINT_DENSITY_MEDIUM;
/**麻点密度低 */
declare const BMAP_POINT_DENSITY_LOW;

/** 检索成功。对应数值“0” */
declare const BMAP_STATUS_SUCCESS;
/** 城市列表。对应数值“1” */
declare const BMAP_STATUS_CITY_LIST;
/** 位置结果未知。对应数值“2” */
declare const BMAP_STATUS_UNKNOWN_LOCATION;
/** 导航结果未知。对应数值“3” */
declare const BMAP_STATUS_UNKNOWN_ROUTE;
/** 非法密钥。对应数值“4” */
declare const BMAP_STATUS_INVALID_KEY;
/** 非法请求。对应数值“5” */
declare const BMAP_STATUS_INVALID_REQUEST;
/** 没有权限。对应数值“6” */
declare const BMAP_STATUS_PERMISSION_DENIED;
/** 服务不可用。对应数值“7” */
declare const BMAP_STATUS_SERVICE_UNAVAILABLE;
/** 超时。对应数值“8” */
declare const BMAP_STATUS_TIMEOUT;

/** 全景场景点的类型为室内场景 */
declare const BMAP_PANORAMA_INDOOR_SCENE;
/** 全景场景点的类型为室外场景 */
declare const BMAP_PANORAMA_STREET_SCENE;

/** 酒店类 */
declare const BMAP_PANORAMA_POI_HOTEL;
/** 餐饮类 */
declare const BMAP_PANORAMA_POI_CATERING;
/** 电影院 */
declare const BMAP_PANORAMA_POI_MOVIE;
/** 公交站点 */
declare const BMAP_PANORAMA_POI_TRANSIT;
/** 室内景 */
declare const BMAP_PANORAMA_POI_INDOOR_SCENE;
/** 无，即隐藏所有的poi类型 */
declare const BMAP_PANORAMA_POI_NONE;

/**圆形，为默认形状 */
declare const BMAP_POINT_SHAPE_CIRCLE;
/**星形 */
declare const BMAP_POINT_SHAPE_STAR;
/**方形 */
declare const BMAP_POINT_SHAPE_SQUARE;
/**菱形 */
declare const BMAP_POINT_SHAPE_RHOMBUS;
/**水滴状，该类型无size和color属性 */
declare const BMAP_POINT_SHAPE_WATERDROP;


/**定义点的尺寸为超小，宽高为2px * 2px */
declare const BMAP_POINT_SIZE_TINY;
/**定义点的尺寸为很小，宽高为4px * 4px */
declare const BMAP_POINT_SIZE_SMALLER;
/**定义点的尺寸为小，宽高为8px * 8px */
declare const BMAP_POINT_SIZE_SMALL;
/**定义点的尺寸为正常，宽高为10px * 10px，为海量点默认尺寸 */
declare const BMAP_POINT_SIZE_NORMAL;
/**定义点的尺寸为大，宽高为16px * 16px */
declare const BMAP_POINT_SIZE_BIG;
/**定义点的尺寸为很大，宽高为20px * 20px */
declare const BMAP_POINT_SIZE_BIGGER;
/**定义点的尺寸为超大，宽高为30px * 30px */
declare const BMAP_POINT_SIZE_HUGE;

/**放大图标 */
declare const BMAP_CONTEXT_MENU_ICON_ZOOMIN;
/**缩小图标 */
declare const BMAP_CONTEXT_MENU_ICON_ZOOMOUT;

/**一般位置点 */
declare const BMAP_POI_TYPE_NORMAL;
/**公交车站位置点 */
declare const BMAP_POI_TYPE_BUSSTOP;
/**地铁车站位置点 */
declare const BMAP_POI_TYPE_SUBSTOP;

/**推荐方案 */
declare const BMAP_TRANSIT_POLICY_RECOMMEND;
/**最少时间 */
declare const BMAP_TRANSIT_POLICY_LEAST_TIME;
/**最少换乘 */
declare const BMAP_TRANSIT_POLICY_LEAST_TRANSFER;
/**最少步行 */
declare const BMAP_TRANSIT_POLICY_LEAST_WALKING;
/**不乘地铁 */
declare const BMAP_TRANSIT_POLICY_AVOID_SUBWAYS;
/**优先地铁 */
declare const BMAP_TRANSIT_POLICY_FIRST_SUBWAYS;

/**时间短 */
declare const BMAP_INTERCITY_POLICY_LEAST_TIME;
/**出发早 */
declare const BMAP_INTERCITY_POLICY_EARLY_START;
/**价格低 */
declare const BMAP_INTERCITY_POLICY_CHEAP_PRICE;

/**火车优先 */
declare const BMAP_TRANSIT_TYPE_POLICY_TRAIN;
/**飞机优先 */
declare const BMAP_TRANSIT_TYPE_POLICY_AIRPLANE;
/**大巴优先 */
declare const BMAP_TRANSIT_TYPE_POLICY_COACH;

/**国内市内换乘 */
declare const BMAP_TRANSIT_TYPE_IN_CITY;
/**国内跨城换乘 */
declare const BMAP_TRANSIT_TYPE_CROSS_CITY;


/**公交车 */
declare const BMAP_LINE_TYPE_BUS;
/**地铁 */
declare const BMAP_LINE_TYPE_SUBWAY;
/**轮渡 */
declare const BMAP_LINE_TYPE_FERRY;
/**火车 */
declare const BMAP_LINE_TYPE_TRAIN;
/**飞机 */
declare const BMAP_LINE_TYPE_AIRPLANE;
/**大巴 */
declare const BMAP_LINE_TYPE_COACH;

/** 驾车结果展现中点击列表后的展现点步骤 */
declare const BMAP_HIGHLIGHT_STEP;
/** 驾车结果展现中点击列表后的展现路段 */
declare const BMAP_HIGHLIGHT_ROUTE;

//#endregion
