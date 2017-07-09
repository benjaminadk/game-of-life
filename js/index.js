"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reveal = function (_React$Component) {
  _inherits(Reveal, _React$Component);

  function Reveal(props) {
    _classCallCheck(this, Reveal);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      open: false
    };
    return _this;
  }
  //MANUALLY CLOSING MODAL

  Reveal.prototype.closeModal = function closeModal() {
    $("#docs").foundation("close");
  };

  Reveal.prototype.componentDidMount = function componentDidMount() {

    var options = {
      animationIn: "spinIn",
      animationOut: "spinOut"
    };
    var reveal = new Foundation.Reveal($("#docs"), options);
  };

  Reveal.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "reveal", id: "docs", "data-reveal": true },
      React.createElement(
        "h4",
        null,
        "GAME OF LIFE"
      ),
      React.createElement(
        "p",
        null,
        "The Game of Life was created in 1970 by an English Mathmetician, John Horton.  It simulates LIFE to a certain degree.  The game outcome is always determined by the game's initial state, or simply, the way the cells are arranged.  There are a few basic rules that govern the game.  This set of rules is applied to the board as a whole on each Evolution."
      ),
      React.createElement(
        "h4",
        null,
        "Cells Are Evaluated Based On Eight Neighboring Cells"
      ),
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          "RULE 1 - Any Cell with fewer than two neighbors dies.  Lonliness/Underpopulation"
        ),
        React.createElement(
          "li",
          null,
          "RULE 2 - Any Cell with two or three neighbors lives on to the next generation"
        ),
        React.createElement(
          "li",
          null,
          "RULE 3 - Any Cell with over three neighbors dies.  Overpopulation"
        ),
        React.createElement(
          "li",
          null,
          "RULE 4 - Any Dead Cell with exactly three neighbors becomes Alive.  Reproduction"
        )
      ),
      React.createElement(
        "h4",
        null,
        "FEATURES"
      ),
      React.createElement(
        "p",
        null,
        "Point and Click Cell Highlighting - Set the board any way you want and run your own Game of Life Evolution Instance"
      ),
      React.createElement(
        "p",
        null,
        "Save a Configuration and Print it Later - Save your experiment in case it turns out cool. Clicking all those Cells is tedious.  Simply save before you Start your Instance and you can reuse your board multiple times."
      ),
      React.createElement(
        "p",
        null,
        "Three Cell Sizes -  Towards the bottom of the button side controls panel there are Small, Medium and Large option buttons.  These correspond to 25x25, 50x50 and 100x100 Cell Grids. While Game of Life is stopped/paused simply click a size button and the board will change.  Those familiar with React may chose to open the source files where you can alter the state of App.state.rows/columns to any number you wish."
      ),
      React.createElement(
        "p",
        null,
        "Choose Cell Color - Mature Live Cells as well as New Live Cells.  These values may be changed at any time with the color pickers in the slider side controls."
      ),
      React.createElement(
        "p",
        null,
        "Set Probability of Cell being born alive with the ",
        React.createElement(
          "code",
          null,
          "LIFE FACTOR"
        ),
        " slider.  A process goes on behind the scenes to create Cells before each Instance of Game of Life.  This input give Cells an 1 in ",
        React.createElement(
          "code",
          null,
          "INPUT"
        ),
        " chance of being alive on initiation."
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "code",
          null,
          "START BUTTON"
        ),
        " begins an Instance of Game of Life"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "code",
          null,
          "STOP BUTTON"
        ),
        " pauses an Instance of Game of Life"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "code",
          null,
          "CLEAR BUTTON"
        ),
        " erases the enitre board and ends the Instance of Game of Life"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "code",
          null,
          "RESET BUTTON"
        ),
        " ends an Instance of Game of Life and generates a new random board on every press"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "code",
          null,
          "LARGE BUTTON"
        ),
        " sets Cell size to 25x25"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "code",
          null,
          "MEDIUM BUTTON"
        ),
        " sets Cell size to 50x50"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "code",
          null,
          "SMALL BUTTON"
        ),
        " sets Cell size to 100x100"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "code",
          null,
          "SAVE BUTTON"
        ),
        " saves the current board configuration for future use(Session Only)"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "code",
          null,
          "PRINT BUTTON"
        ),
        " prints saved board configuation to Game of Life - now you can review it!"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "code",
          null,
          "DOCS BUTTON"
        ),
        " opens this documentation page"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "code",
          null,
          "NEW CELL COLOR"
        ),
        " sets color for Cells 1 second and younger"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "code",
          null,
          "MATURE CELL COLOR"
        ),
        " sets color for Cells older than 1 second"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "code",
          null,
          "SPEED FACTOR"
        ),
        " sets time between Evolutions 0.1s thru 1s"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "code",
          null,
          "LIFE FACTOR"
        ),
        " sets probability of cell being alive on instanciation"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "code",
          null,
          "EVOLUTIONS"
        ),
        " displays number of Evolutions that have taken place since instanciation"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "code",
          null,
          "LIVE CELLS"
        ),
        " displays the current number of living Cells on the board"
      ),
      React.createElement(
        "button",
        { className: "close-button", "data-close": true, "aria-label": "Close modal", type: "button", onClick: this.closeModal },
        React.createElement(
          "span",
          { "aria-hidden": "true" },
          "×"
        )
      )
    );
  };

  return Reveal;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    "header",
    null,
    React.createElement(
      "p",
      { id: "title" },
      React.createElement("i", { className: "devicon-sass-original" }),
      "John Conway's Game Of Life",
      React.createElement("i", { className: "devicon-react-original-wordmark" })
    )
  );
};

var ControlPanel2 = function (_React$Component2) {
  _inherits(ControlPanel2, _React$Component2);

  function ControlPanel2(props) {
    _classCallCheck(this, ControlPanel2);

    return _possibleConstructorReturn(this, _React$Component2.call(this, props));
  }

  ControlPanel2.prototype.render = function render() {
    return React.createElement(
      "div",
      { id: "controlPanel2" },
      React.createElement(
        "button",
        { type: "button", className: "success button expanded", onClick: this.props.start },
        "START"
      ),
      React.createElement(
        "button",
        { type: "button", className: "alert button expanded", onClick: this.props.stop },
        "STOP"
      ),
      React.createElement(
        "button",
        { type: "button", className: "warning button expanded", onClick: this.props.clear },
        "CLEAR"
      ),
      React.createElement(
        "button",
        { type: "button", className: "secondary button expanded", onClick: this.props.reset },
        "RESET"
      ),
      React.createElement(
        "p",
        { id: "aliveDisplay" },
        "LIVE CELLS | ",
        React.createElement(
          "span",
          { id: "evolutionTitle" },
          "EVOLUTIONS"
        )
      ),
      React.createElement(
        "p",
        { id: "aliveCells" },
        document.getElementsByClassName("alive").length,
        " | ",
        React.createElement(
          "span",
          { id: "evolution" },
          this.props.evolution
        )
      ),
      React.createElement(
        "p",
        { id: "sizeDisplay" },
        "CELL SIZE"
      ),
      React.createElement(
        "div",
        { className: "button-group" },
        React.createElement(
          "a",
          { className: "button", onClick: this.props.changeLarge },
          "LARGE"
        ),
        React.createElement(
          "a",
          { className: "button", onClick: this.props.changeMedium },
          "MEDIUM"
        ),
        React.createElement(
          "a",
          { className: "button", onClick: this.props.changeSmall },
          "SMALL"
        )
      ),
      React.createElement(
        "p",
        { id: "extraDisplay" },
        "EXTRAS"
      ),
      React.createElement(
        "div",
        { className: "button-group" },
        React.createElement(
          "a",
          { className: "button", onClick: this.props.save },
          "SAVE"
        ),
        React.createElement(
          "a",
          { className: "button", onClick: this.props.print },
          "PRINT"
        ),
        React.createElement(
          "button",
          { className: "button", "data-open": "docs" },
          "DOCS"
        )
      )
    );
  };

  return ControlPanel2;
}(React.Component);

var ControlPanel = function (_React$Component3) {
  _inherits(ControlPanel, _React$Component3);

  function ControlPanel(props) {
    _classCallCheck(this, ControlPanel);

    return _possibleConstructorReturn(this, _React$Component3.call(this, props));
  }

  ControlPanel.prototype.componentDidMount = function componentDidMount() {
    //INIT SLIDER FOR SPEED STATE
    var options = {
      initialStart: 3,
      step: 1,
      start: 1,
      end: 10
    };
    var slider1 = new Foundation.Slider($("#speedSet"), options);
    //INIT SLIDER FOR RANDOM DENSITY STATE
    var options2 = {
      initialStart: 5,
      step: 1,
      start: 1,
      end: 10
    };
    var slider2 = new Foundation.Slider($("#densitySet"), options2);
  };

  ControlPanel.prototype.render = function render() {
    return React.createElement(
      "div",
      { id: "controlPanel" },
      React.createElement(
        "span",
        { id: "colorDisplay" },
        "MATURE CELL COLOR",
        React.createElement("input", { type: "color", id: "color" })
      ),
      React.createElement(
        "span",
        { id: "colorDisplay2" },
        "NEWBORN CELL COLOR",
        React.createElement("input", { type: "color", id: "color2" })
      ),
      React.createElement(
        "span",
        { id: "speedDisplay" },
        "SPEED FACTOR"
      ),
      React.createElement(
        "div",
        { className: "row column" },
        React.createElement(
          "div",
          { className: "slider", id: "speedSet", "data-slider": true },
          React.createElement("span", { className: "slider-handle", "data-slider-handle": true, role: "slider", "aria-controls": "sliderOutput1", onClick: this.props.changeSpeed }),
          React.createElement("span", { className: "slider-fill", "data-slider-fill": true, onClick: this.props.changeSpeed })
        )
      ),
      React.createElement(
        "div",
        { className: "row column" },
        React.createElement("input", { type: "number", id: "sliderOutput1", onClick: this.props.changeSpeed })
      ),
      React.createElement(
        "span",
        { id: "densityDisplay" },
        "LIFE FACTOR"
      ),
      React.createElement(
        "div",
        { className: "row column" },
        React.createElement(
          "div",
          { className: "slider", id: "densitySet", "data-slider": true },
          React.createElement("span", { className: "slider-handle", "data-slider-handle": true, role: "slider", "aria-controls": "sliderOutput2", onClick: this.props.changeDensity }),
          React.createElement("span", { className: "slider-fill", "data-slider-fill": true, onClick: this.props.changeDensity })
        )
      ),
      React.createElement(
        "div",
        { className: "row column" },
        React.createElement("input", { type: "number", id: "sliderOutput2", onClick: this.props.changeDensity })
      ),
      React.createElement(
        "span",
        { className: "label info", id: "ben" },
        "with",
        React.createElement("i", { className: "devicon-react-original-wordmark" }),
        "by @benjaminadk "
      )
    );
  };

  return ControlPanel;
}(React.Component);

var Cell = function (_React$Component4) {
  _inherits(Cell, _React$Component4);

  function Cell(props) {
    _classCallCheck(this, Cell);

    return _possibleConstructorReturn(this, _React$Component4.call(this, props));
  }

  Cell.prototype.render = function render() {
    return React.createElement("td", { id: this.props.row + ":" + this.props.column, className: this.props.alive === true ? 'alive cell' : 'dead cell' });
  };

  return Cell;
}(React.Component);

var App = function (_React$Component5) {
  _inherits(App, _React$Component5);

  function App(props) {
    _classCallCheck(this, App);

    var _this5 = _possibleConstructorReturn(this, _React$Component5.call(this, props));

    _this5.state = {
      rows: 50,
      columns: 50,
      board: [],
      number: 5,
      speed: 3,
      evolution: 0,
      savedBoard: []
    };
    _this5.makeCell = _this5.makeCell.bind(_this5);
    _this5.makeRow = _this5.makeRow.bind(_this5);
    _this5.makeGrid = _this5.makeGrid.bind(_this5);
    _this5.makeBoard = _this5.makeBoard.bind(_this5);
    _this5.toggleLife = _this5.toggleLife.bind(_this5);
    _this5.godFunction = _this5.godFunction.bind(_this5);
    _this5.start = _this5.start.bind(_this5);
    _this5.stop = _this5.stop.bind(_this5);
    _this5.clear = _this5.clear.bind(_this5);
    _this5.reset = _this5.reset.bind(_this5);
    _this5.evolve = _this5.evolve.bind(_this5);
    _this5.changeSpeed = _this5.changeSpeed.bind(_this5);
    _this5.changeDensity = _this5.changeDensity.bind(_this5);
    _this5.changeSmall = _this5.changeSmall.bind(_this5);
    _this5.changeMedium = _this5.changeMedium.bind(_this5);
    _this5.changeLarge = _this5.changeLarge.bind(_this5);
    _this5.save = _this5.save.bind(_this5);
    _this5.print = _this5.print.bind(_this5);

    return _this5;
  }

  //MAKES RANDOM GRID WHEN PAGE LOADS

  App.prototype.componentDidMount = function componentDidMount() {
    this.setState({
      board: this.makeGrid()
    });
  };
  // DETERMINES IF A CELL IS DEAD OR ALIVE RANDOMLY
  // CELL WILL HAVE A ONE IS STATE.NUMBER CHANCE OF BEING ALIVE ON INIT
  // I THINK :)

  App.prototype.makeCell = function makeCell() {
    var status = Math.floor(Math.random() * this.state.number) + 1 === this.state.number ? true : false;
    return status;
  };
  //MAKES AN ARRAY OF CELLS - BASED ON STATE.COLUMNS
  //EACH ROW NEEDS A CELL FOR EVERY COLUMN

  App.prototype.makeRow = function makeRow() {
    var row = [];
    for (var i = 0; i < this.state.columns; i++) {
      row.push(this.makeCell());
    }
    return row;
  };
  //MAKES AN ARRAY OF ARRAYS - BASED ON STATE.ROWS
  //EACH ROW NEEDS AN ARRAY OF CELLS

  App.prototype.makeGrid = function makeGrid() {
    var grid = [];
    for (var i = 0; i < this.state.rows; i++) {
      grid.push(this.makeRow());
    }
    return grid;
  };
  // TAKES GRID AND MAKES A CELL COMPONENT FOR EVERY CELL

  App.prototype.makeBoard = function makeBoard(grid) {
    var output = [];
    for (var i = 0; i < grid.length; i++) {
      var row = [];
      for (var j = 0; j < grid[i].length; j++) {
        row.push(React.createElement(Cell, { row: i, column: j, alive: grid[i][j] === true ? true : false }));
      }
      output.push(React.createElement(
        "tr",
        null,
        row
      ));
    }
    return output;
  };
  //TOGGLES CELL LIFE STATUS SO USER CAN INTERACT WITH BOARD

  App.prototype.toggleLife = function toggleLife(e) {
    var xy = e.target.id.split(":");
    var newBoard = this.state.board;
    newBoard[xy[0]][xy[1]] = !newBoard[xy[0]][xy[1]];
    this.setState({ board: newBoard });
  };
  //APPLIES CONWAY'S RULES FOR CELL BIRTH/DEATH

  App.prototype.godFunction = function godFunction(grid) {
    var _this6 = this;

    return grid.map(function (row, rowIndex) {
      return row.map(function (cell, cellIndex) {
        var magicNum = 0;
        var rowAbove = rowIndex === 0 ? _this6.state.rows - 1 : rowIndex - 1;
        var rowBelow = rowIndex === _this6.state.rows - 1 ? 0 : rowIndex + 1;
        var prevCell = cellIndex === 0 ? _this6.state.columns - 1 : cellIndex - 1;
        var nextCell = cellIndex === _this6.state.columns - 1 ? 0 : cellIndex + 1;
        if (grid[rowAbove][prevCell] === true) {
          magicNum++;
        }
        if (grid[rowAbove][cellIndex] === true) {
          magicNum++;
        }
        if (grid[rowAbove][nextCell] === true) {
          magicNum++;
        }
        if (grid[rowIndex][prevCell] === true) {
          magicNum++;
        }
        if (grid[rowIndex][nextCell] === true) {
          magicNum++;
        }
        if (grid[rowBelow][prevCell] === true) {
          magicNum++;
        }
        if (grid[rowBelow][cellIndex] === true) {
          magicNum++;
        }
        if (grid[rowBelow][nextCell] === true) {
          magicNum++;
        }
        if (cell === true && (magicNum === 2 || magicNum === 3)) {
          return true;
        } else if (cell === false && magicNum === 3) {
          return true;
        } else {
          return false;
        }
      });
    });
  };
  //TIMER THAT RUNS EACH EVOLUTION OF BOARD

  App.prototype.evolve = function evolve() {
    this.setState({
      evolution: this.state.evolution + 1,
      board: this.godFunction(this.state.board)
    });
  };
  //WHEN USERS CLICK START BUTTON - STARTS EVOLUTIONS

  App.prototype.start = function start() {
    clearTimeout(this.timer);
    this.timer = setInterval(this.evolve, this.state.speed * 100);
  };
  //WHEN USER CLICK STOP BUTTON - STOPS EVOLUTIONS

  App.prototype.stop = function stop() {
    clearTimeout(this.timer);
  };
  //WHEN USER CLICK CLEAR - CLEARS BOARD

  App.prototype.clear = function clear() {
    clearTimeout(this.timer);
    var blankBoard = this.state.board.map(function (el) {
      return el.map(function (elem) {
        return false;
      });
    });
    this.setState({
      board: blankBoard,
      evolution: 0
    });
  };
  //WHEN USER CLICK RESET TO RANDOM BOARD

  App.prototype.reset = function reset() {
    clearTimeout(this.timer);
    this.setState({
      board: this.makeGrid()
    });
  };
  //SLIDER FOR SPEED VARIABLE RANGE FROM .1s TO 1s PER EVOLUTION

  App.prototype.changeSpeed = function changeSpeed() {
    var speed = $("#sliderOutput1")[0].valueAsNumber;
    this.setState({
      speed: speed
    });
    setTimeout(console.log(this.state.speed), 500);
  };
  //SLIDER FOR DENSITY OF CELLS - CELL AS ONE IN VALUE CHANCE OF LIFE ON INIT

  App.prototype.changeDensity = function changeDensity() {
    var number = $("#sliderOutput2")[0].valueAsNumber;
    this.setState({
      number: number
    });
    setTimeout(console.log(this.state.number), 500);
  };
  //ATTEMPTING BOARD SIZE FUNCTIONS

  App.prototype.changeSmall = function changeSmall() {
    this.setState({
      rows: 100,
      columns: 100
    });
    setTimeout(this.reset, 1000);
  };

  App.prototype.changeMedium = function changeMedium() {
    this.setState({
      rows: 50,
      columns: 50
    });
    setTimeout(this.reset, 1000);
  };

  App.prototype.changeLarge = function changeLarge() {
    this.setState({
      rows: 25,
      columns: 25
    });
    setTimeout(this.reset, 1000);
  };

  App.prototype.save = function save() {
    this.setState({
      savedBoard: this.state.board
    });
    alert("Board Saved For This Session! Use Print to Load Your Saved Board Configuraton");
  };

  App.prototype.print = function print() {
    this.setState({
      board: this.state.savedBoard
    });
  };

  App.prototype.render = function render() {
    return React.createElement(
      "div",
      { id: "appWrapper" },
      React.createElement(Reveal, null),
      React.createElement(
        "table",
        { className: "gameBoard", onClick: this.toggleLife },
        this.makeBoard(this.state.board)
      ),
      React.createElement(ControlPanel, { changeSpeed: this.changeSpeed.bind(this),
        changeDensity: this.changeDensity.bind(this) }),
      React.createElement(ControlPanel2, { start: this.start.bind(this),
        stop: this.stop.bind(this),
        clear: this.clear.bind(this),
        reset: this.reset.bind(this),
        save: this.save.bind(this),
        print: this.print.bind(this),
        evolution: this.state.evolution,
        changeSmall: this.changeSmall.bind(this),
        changeMedium: this.changeMedium.bind(this),
        changeLarge: this.changeLarge.bind(this) }),
      React.createElement(Header, null)
    );
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));

var color = document.getElementById("color");
color.addEventListener("change", function () {
  document.documentElement.style.setProperty("--cellColor", color.value);
});
var color2 = document.getElementById("color2");
color.addEventListener("change", function () {
  document.documentElement.style.setProperty("--newCellColor", color2.value);
});