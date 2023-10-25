import React from "react";

function Logo({ width = "100px" }) {
  return <div>
    <img src="data:image/jpeg;base64,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" className="h-12 w-12  rounded-lg"/>
  </div>;
}

export default Logo;
