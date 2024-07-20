const GenderCheckBox = ({ onChangeHandler, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control ">
        <label
          className={` label gap-2 cursor-pointer ${
            selectedGender === " male" ? "selected" : " "
          }`}
        >
          <span className="label-text">male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary border-slate-900"
            onChange={ () => onChangeHandler("male")}
            checked={selectedGender === " male"}
          />
        </label>
      </div>
      <div className="form-control ">
        <label
          className={` label gap-2 cursor-pointer ${
            selectedGender === " female" ? "selected" : " "
          }`}
        >
          <span className="label-text">female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary border-slate-900"
            onChange={() => onChangeHandler("female")}
            checked={selectedGender === " female"}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
