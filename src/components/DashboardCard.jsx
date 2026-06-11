function DashboardCard(props) {
    return (
        <div className="dashboard-card">
            <h3>{props.title}</h3>

            <h1 className="card-value">{props.value}</h1>

            <p>{props.subtitle}</p>
        </div>
    );
}

export default DashboardCard;