(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("draft-js"), require("classnames"));
	else if(typeof define === 'function' && define.amd)
		define("RichEditor", ["react", "draft-js", "classnames"], factory);
	else if(typeof exports === 'object')
		exports["RichEditor"] = factory(require("react"), require("draft-js"), require("classnames"));
	else
		root["RichEditor"] = factory(root["react"], root["draft-js"], root["classnames"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _draftJs = __webpack_require__(3);
	
	var _selection = __webpack_require__(7);
	
	var _SideToolbar = __webpack_require__(6);
	
	var _SideToolbar2 = _interopRequireDefault(_SideToolbar);
	
	var _InlineToolbar = __webpack_require__(5);
	
	var _InlineToolbar2 = _interopRequireDefault(_InlineToolbar);
	
	var _ImageComponent = __webpack_require__(4);
	
	var _ImageComponent2 = _interopRequireDefault(_ImageComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RichEditor = function (_Component) {
	  _inherits(RichEditor, _Component);
	
	  function RichEditor(props) {
	    _classCallCheck(this, RichEditor);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RichEditor).call(this, props));
	
	    _this.state = {
	      editorState: _draftJs.EditorState.createEmpty(),
	      inlineToolbar: { show: false }
	    };
	
	    _this.onChange = function (editorState) {
	      if (!editorState.getSelection().isCollapsed()) {
	        var selectionRange = (0, _selection.getSelectionRange)();
	        var selectionCoords = (0, _selection.getSelectionCoords)(selectionRange);
	        _this.setState({
	          inlineToolbar: {
	            show: true,
	            position: {
	              top: selectionCoords.offsetTop,
	              left: selectionCoords.offsetLeft
	            }
	          }
	        });
	      } else {
	        _this.setState({ inlineToolbar: { show: false } });
	      }
	
	      _this.setState({ editorState: editorState });
	      setTimeout(_this.updateSelection, 0);
	    };
	    _this.focus = function () {
	      return _this.refs.editor.focus();
	    };
	    _this.updateSelection = function () {
	      return _this._updateSelection();
	    };
	    _this.handleKeyCommand = function (command) {
	      return _this._handleKeyCommand(command);
	    };
	    _this.handleFileInput = function (e) {
	      return _this._handleFileInput(e);
	    };
	    _this.handleUploadImage = function () {
	      return _this._handleUploadImage();
	    };
	    _this.toggleBlockType = function (type) {
	      return _this._toggleBlockType(type);
	    };
	    _this.toggleInlineStyle = function (style) {
	      return _this._toggleInlineStyle(style);
	    };
	    _this.insertImage = function (file) {
	      return _this._insertImage(file);
	    };
	    _this.blockRenderer = function (block) {
	      if (block.getType() === 'atomic') {
	        return {
	          component: _ImageComponent2.default
	        };
	      }
	      return null;
	    };
	    _this.blockStyler = function (block) {
	      if (block.getType() === 'unstyled') {
	        return 'paragraph';
	      }
	      return null;
	    };
	    return _this;
	  }
	
	  _createClass(RichEditor, [{
	    key: '_updateSelection',
	    value: function _updateSelection() {
	      var selectionRange = (0, _selection.getSelectionRange)();
	      var selectedBlock = void 0;
	      if (selectionRange) {
	        selectedBlock = (0, _selection.getSelectedBlockElement)(selectionRange);
	      }
	      this.setState({
	        selectedBlock: selectedBlock,
	        selectionRange: selectionRange
	      });
	    }
	  }, {
	    key: '_handleKeyCommand',
	    value: function _handleKeyCommand(command) {
	      var editorState = this.state.editorState;
	
	      var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);
	      if (newState) {
	        this.onChange(newState);
	        return true;
	      }
	      return false;
	    }
	  }, {
	    key: '_toggleBlockType',
	    value: function _toggleBlockType(blockType) {
	      this.onChange(_draftJs.RichUtils.toggleBlockType(this.state.editorState, blockType));
	    }
	  }, {
	    key: '_toggleInlineStyle',
	    value: function _toggleInlineStyle(inlineStyle) {
	      this.onChange(_draftJs.RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
	    }
	  }, {
	    key: '_insertImage',
	    value: function _insertImage(file) {
	      var entityKey = _draftJs.Entity.create('atomic', 'IMMUTABLE', { src: URL.createObjectURL(file) });
	      this.onChange(_draftJs.AtomicBlockUtils.insertAtomicBlock(this.state.editorState, entityKey, ' '));
	    }
	  }, {
	    key: '_handleFileInput',
	    value: function _handleFileInput(e) {
	      var fileList = e.target.files;
	      var file = fileList[0];
	      this.insertImage(file);
	    }
	  }, {
	    key: '_handleUploadImage',
	    value: function _handleUploadImage() {
	      this.refs.fileInput.click();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state = this.state;
	      var editorState = _state.editorState;
	      var selectedBlock = _state.selectedBlock;
	      var selectionRange = _state.selectionRange;
	
	      var sideToolbarOffsetTop = 0;
	
	      if (selectedBlock) {
	        var editor = document.getElementById('richEditor');
	        var editorBounds = editor.getBoundingClientRect();
	        var blockBounds = selectedBlock.getBoundingClientRect();
	
	        sideToolbarOffsetTop = blockBounds.bottom - editorBounds.top - 31; // height of side toolbar
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'editor', id: 'richEditor', onClick: this.focus },
	        selectedBlock ? _react2.default.createElement(_SideToolbar2.default, {
	          editorState: editorState,
	          style: { top: sideToolbarOffsetTop },
	          onToggle: this.toggleBlockType,
	          onUploadImage: this.handleUploadImage
	        }) : null,
	        this.state.inlineToolbar.show ? _react2.default.createElement(_InlineToolbar2.default, {
	          editorState: editorState,
	          onToggle: this.toggleInlineStyle,
	          position: this.state.inlineToolbar.position
	        }) : null,
	        _react2.default.createElement(_draftJs.Editor, {
	          blockRendererFn: this.blockRenderer,
	          blockStyleFn: this.blockStyler,
	          editorState: editorState,
	          handleKeyCommand: this.handleKeyCommand,
	          onChange: this.onChange,
	          placeholder: 'Write something...',
	          spellCheck: true,
	          readOnly: this.state.editingImage,
	          ref: 'editor'
	        }),
	        _react2.default.createElement('input', { type: 'file', ref: 'fileInput', style: { display: 'none' },
	          onChange: this.handleFileInput })
	      );
	    }
	  }]);
	
	  return RichEditor;
	}(_react.Component);
	
	exports.default = RichEditor;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(8);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var label = _ref.label;
	  var icon = _ref.icon;
	  var active = _ref.active;
	  var onToggle = _ref.onToggle;
	  var style = _ref.style;
	  return _react2.default.createElement(
	    'li',
	    {
	      className: "toolbar-icon " + (0, _classnames2.default)({ active: active }),
	      onMouseDown: function onMouseDown(e) {
	        e.preventDefault();
	        onToggle(style);
	      }
	    },
	    label ? label : _react2.default.createElement('i', { className: icon })
	  );
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _draftJs = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var block = _ref.block;
	
	  var imgContent = _draftJs.Entity.get(block.getEntityAt(0)).data.src;
	  return _react2.default.createElement('img', { src: imgContent });
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ToolbarIcon = __webpack_require__(2);
	
	var _ToolbarIcon2 = _interopRequireDefault(_ToolbarIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var INLINE_STYLES = [{ icon: 'a-bold', style: 'BOLD' }, { icon: 'a-italic', style: 'ITALIC' }];
	
	exports.default = function (_ref) {
	  var editorState = _ref.editorState;
	  var onToggle = _ref.onToggle;
	  var position = _ref.position;
	
	  var currentStyle = editorState.getCurrentInlineStyle();
	  return _react2.default.createElement(
	    'div',
	    {
	      className: 'toolbar',
	      id: 'inlineToolbar',
	      style: position
	    },
	    _react2.default.createElement(
	      'ul',
	      { className: 'toolbar-icons' },
	      INLINE_STYLES.map(function (type) {
	        return _react2.default.createElement(_ToolbarIcon2.default, {
	          key: type.label || type.icon,
	          active: currentStyle.has(type.style),
	          label: type.label,
	          icon: type.icon,
	          onToggle: onToggle,
	          style: type.style
	        });
	      })
	    )
	  );
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ToolbarIcon = __webpack_require__(2);
	
	var _ToolbarIcon2 = _interopRequireDefault(_ToolbarIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BLOCK_TYPES = [{ label: 'H1', style: 'header-one' }, { label: 'H2', style: 'header-two' }, { icon: 'a-unordered-list', style: 'unordered-list-item' }, { icon: 'a-ordered-list', style: 'ordered-list-item' }, { icon: 'a-quote', style: 'blockquote' }];
	
	var SideToolbarExtras = function SideToolbarExtras(_ref) {
	  var editorState = _ref.editorState;
	  var onToggle = _ref.onToggle;
	
	  var selection = editorState.getSelection();
	  var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
	  return _react2.default.createElement(
	    'div',
	    { className: 'toolbar side' },
	    _react2.default.createElement(
	      'ul',
	      { className: 'toolbar-icons' },
	      BLOCK_TYPES.map(function (type) {
	        return _react2.default.createElement(_ToolbarIcon2.default, {
	          key: type.label || type.icon,
	          active: type.style === blockType,
	          label: type.label,
	          icon: type.icon,
	          onToggle: onToggle,
	          style: type.style
	        });
	      })
	    )
	  );
	};
	
	var SideToolbar = function (_Component) {
	  _inherits(SideToolbar, _Component);
	
	  function SideToolbar(props) {
	    _classCallCheck(this, SideToolbar);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SideToolbar).call(this, props));
	
	    _this.state = {
	      isExpanded: false
	    };
	    return _this;
	  }
	
	  _createClass(SideToolbar, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var isExpanded = this.state.isExpanded;
	      var _props = this.props;
	      var editorState = _props.editorState;
	      var onUploadImage = _props.onUploadImage;
	      var onToggle = _props.onToggle;
	
	      return _react2.default.createElement(
	        'div',
	        { style: this.props.style, className: 'side-toolbar' },
	        _react2.default.createElement('i', { className: 'a-photo',
	          onMouseDown: function onMouseDown(e) {
	            return e.preventDefault();
	          },
	          onClick: onUploadImage
	        }),
	        _react2.default.createElement(
	          'i',
	          { className: 'a-menu',
	            onMouseEnter: function onMouseEnter() {
	              return _this2.setState({ isExpanded: true });
	            },
	            onMouseDown: function onMouseDown(e) {
	              return e.preventDefault();
	            },
	            onMouseLeave: function onMouseLeave() {
	              return _this2.setState({ isExpanded: false });
	            }
	          },
	          isExpanded ? _react2.default.createElement(SideToolbarExtras, { editorState: editorState, onToggle: onToggle }) : null
	        )
	      );
	    }
	  }]);
	
	  return SideToolbar;
	}(_react.Component);
	
	exports.default = SideToolbar;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getSelectionRange = exports.getSelectionRange = function getSelectionRange() {
	  var selection = window.getSelection();
	  if (selection.rangeCount === 0) return null;
	  return selection.getRangeAt(0);
	};
	
	var getSelectedBlockElement = exports.getSelectedBlockElement = function getSelectedBlockElement(range) {
	  var node = range.startContainer;
	  do {
	    var nodeIsDataBlock = node.getAttribute ? node.getAttribute('data-block') : null;
	    if (nodeIsDataBlock) return node;
	    node = node.parentNode;
	  } while (node !== null);
	  return null;
	};
	
	var getSelectionCoords = exports.getSelectionCoords = function getSelectionCoords(selectionRange) {
	  var editorBounds = document.getElementById('richEditor').getBoundingClientRect();
	  var rangeBounds = selectionRange.getBoundingClientRect();
	  var rangeWidth = rangeBounds.right - rangeBounds.left;
	  var rangeHeight = rangeBounds.bottom - rangeBounds.top;
	  var offsetLeft = rangeBounds.left - editorBounds.left + rangeWidth / 2
	  /* 72px is width of inline toolbar */
	  - 72 / 2;
	  // 42px is height of inline toolbar (35px) + 5px center triangle and 2px for spacing
	  var offsetTop = rangeBounds.top - editorBounds.top - 42;
	  return { offsetLeft: offsetLeft, offsetTop: offsetTop };
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map