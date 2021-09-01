const LeadsList = props => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>№</th>
                    <th>First name:</th>
                    <th>Last name:</th>
                    <th>Email</th>
                    <th>Passport number</th>
                    <th>Tin</th>
                    <th>Status type</th>
                </tr>
            </thead>
            <tbody>
                { props.leadsList.map((lead, index) => {
                    return (
                        <tr key={ index }>
                            <id>{ ++index }</id>
                            <td>{ lead.firstName }</td>
                            <td>{ lead.lastName }</td>
                            <td>{ lead.email }</td>
                            <td>{ lead.passportNumber }</td>
                            <td>{ lead.tin }</td>
                            <td>{ lead.statusType }</td>
                        </tr>
                    );
                })  }
            </tbody>
        </table>
    )
}

export default LeadsList;