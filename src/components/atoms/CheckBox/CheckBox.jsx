
const CheckBox = ({checked, onChange}) => {
    return (
        <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        />
    );
};

export default CheckBox