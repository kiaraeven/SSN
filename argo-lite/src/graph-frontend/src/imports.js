var THREE = require("three");
var STATS = require("stats.js");
window.THREE = THREE;
require("../include/QuickHull");
require("../include/ConvexGeometry");
require("../include/CSS3DRenderer");
// var Line2 = require("../src/lines/Line2");
// var LineGeometry = require("../src/lines/LineGeometry");
// var LineMaterial = require("../src/lines/LineMaterial");
var Edge = require("./structure/node").Edge;
var Node = require("./structure/node").Node;
var OrbitControls = require("../include/OrbitControls")(THREE); //'three-orbit-controls')(THREE);
THREE.MeshLine = require("../include/THREE.MeshLine").MeshLine;
THREE.MeshLineMaterial = require("../include/THREE.MeshLine").MeshLineMaterial;
var d3 = require("d3");
var ee = require("event-emitter");
var IS_IFRAME_WIDGET = require("../../constants").IS_IFRAME_WIDGET;

exports.default = {
  THREE: THREE,
  MeshLine: THREE.MeshLine,
  MeshLineMaterial: THREE.MeshLineMaterial,
  // Line2: Line2,
  // LineGeometry: LineGeometry,
  // LineMaterial: LineMaterial,
  STATS: STATS, // stats.js panel for showing fps and other stats.
  STATS_SHOW: false,
  Edge: Edge,
  Node: Node,
  OrbitControls: OrbitControls,
  d3: d3,
  ee: ee,
  NODE_COLOR: 0x0055aa,
  NODE_HIGHLIGHT: 0x0055aa,
  // NODE_HIGHLIGHT_RGB: 'rgb(219, 119, 52)',
  ADJACENT_HIGHLIGHT: 0x95a5a6,
  SEARCH_HIGHLIGHT: 0xe67e22,
  NODE_HTEXTURE: "http://i.imgur.com/xzkxSIw.png",
  NODE_TEXTURE: "http://i.imgur.com/reTXqiM.png",
  NODE_NO_HTEX: true,
  NODE_NO_TEX: true,
  NODE_NO_HCOLOR: true,
  NODE_NO_COLOR: false,
  NODE_NO_HIGHLIGHT: false,
  NODE_NEIGHBOR_HIGHLIGHT: true,
  NODE_SHAPE: "circle",
  NODE_HSHAPE: "circle",
  NODE_SIZE: 5,
  HIGHLIGHT_SIZE: 1.0,
  LAYOUT: "d3",
  LINES: "nofancy",
  MAP: false,
  MAP_RENDER_PER_NUMBER_OF_FRAME: 10,
  TEXT_SCALE: true,
  TEXT_SIZE: 0.07,
  TEXT_X_OFFSET: 0.52,
  TEXT_Y_OFFSET: 0.35,
  TEXT_BACK_COLOR: "rgba(100, 100, 200, 0)",
  TEXT_OPACITY: "1",
  TEXT_WIREFRAME: false,
  PIN_COLOR: 0xFFA500
};
