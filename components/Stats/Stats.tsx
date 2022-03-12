import classes from './Stats.module.scss';

const Stats = () => {
    return (
        <div className={classes.container}>
            <div className={classes.col1}>
                <span className={classes.primaryText}>$35m+ in real estate sales</span>
            </div>
            <div className={classes.col2}>
                <span className={classes.secondaryText}>One of the top agents in Compass San Francisco</span>
            </div>

        </div>
    )
}

export default Stats;