import ClipLoader from "react-spinners/ClipLoader";
import './Loading.scss';

function Loading() {
  return (
    <div className="sweet-loading">
      <ClipLoader color="#61ff18" />
    </div>
  );
}

export default Loading;