import React from "react";
import { observer } from "mobx-react";

@observer
class Legend extends React.Component {
  render() {
    const { communityColorDict } = this.props;

    return (
      <div style={{ display: "flex", flexDirection: "column", margin: "10px" }}>
        <h4>Legend</h4>
        {Object.keys(communityColorDict).map((communityId) => (
          <div
            key={communityId}
            style={{ display: "flex", alignItems: "center" }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: communityColorDict[communityId],
                marginRight: "10px",
              }}
            ></div>
            <span>{communityId}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Legend;
