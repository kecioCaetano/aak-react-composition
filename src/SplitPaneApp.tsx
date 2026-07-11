const SplitPane = ({ left, right }) => (
  <div>
    <div className="left-pane">{left}</div>
    <div className="right-pane">{right}</div>
  </div>
);

const Copyright = ({ label }) => <div>Copyright by {label}</div>;

function SplitPaneApp() {
  return (
    <SplitPane
      left={
        <div>
          <ul>
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
          </ul>
        </div>
      }
      right={<Copyright label="Robin" />}
    />
  );
}
export default SplitPaneApp;
