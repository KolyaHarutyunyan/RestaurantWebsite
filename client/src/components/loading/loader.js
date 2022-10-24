import { CircularProgress } from "@material-ui/core";

export const Loader = ({ small, color }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <CircularProgress
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          margin: "auto",
          color: color ? color : small ? "#007AFF" : "#FF453A",
          width: small ? "15px" : "100px",
          height: small ? "14px" : "100px",
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
    </div>
  );
};
