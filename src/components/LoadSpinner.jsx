import "./LoadSpinnerCss.css";

let LoadSpinner = () => {
  return (
    <div class="text-center center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadSpinner;
