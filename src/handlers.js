/* document.getElementById("season_btn").addEventListener("click", () => {
  console.log("check");
});

 */

import React from "react";

class TimeBtns extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  handleClick = (value) => {
    console.log(`Button clicked with value: ${value}`);
    // Add your custom logic here
  };

  render() {
    return (
      <div>
        <div>
          <button type="button" onClick={() => this.handleClick("Button 1")}>
            Season
          </button>
        </div>
        <div>
          <button type="button" onClick={() => this.handleClick("Button 2")}>
            All Time
          </button>
        </div>
      </div>
    );
  }
}

export default TimeBtns;
