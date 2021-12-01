import classes from './Dialog.module.css'

const Dialog = (props) => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.onBuy();
    }
    const selectSizeHandler = (e) =>{
        props.onSelectChange(e.target.value);
    }
    return(
        <form onSubmit={onSubmitHandler}>
            <div className={classes.overlay}>
                <div className={`${classes.dialog} ${classes[props.dialogClass]}`}>
                    <div className={classes['dialog-content']}>
                        {props.children}
                    </div>
                    <div className ="container">
                        <select onChange={selectSizeHandler}>
                            <option value="">--</option>
                            {props.dialog.sizes.map(s => 
                                <option key={s} value={s}>{s}</option>
                                )}
                        </select>
                    </div>
                    <button type="submit" disabled={props.isDisabled}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </form>
    )
}
export default Dialog;