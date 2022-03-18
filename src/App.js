import ResultViewer from "./ResultViewer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h3>📊 Welcome Yaberus students, Wish you good luck with your result </h3>
      <h5>🛑 Enter your registration number:</h5>
      <ResultViewer />
      <p>we will be adding more feature soon</p>
      <footer style={{ paddingTop: 30 }}>
        👨‍💻 DEVELOPED with 💜 by{" "}
        <a href="https://bit.ly/KINFISHTECH" target="_blank">
          KINFE
        </a>
      </footer>
    </div>
  );
}
