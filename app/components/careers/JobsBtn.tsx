import styles from "./Careers.module.css";
type JobsBtnProps = {
  val: number;
  current: number;
  setCurrent: (val: number) => void;
};
function JobsBtn({ val, current, setCurrent }: JobsBtnProps) {
  return (
    <button
      className={styles.jobsBtn}
      style={current == val ? { background: "white" } : {}}
      onClick={() => {
        setCurrent(val);
      }}
    ></button>
  );
}

export default JobsBtn;
