import React, { Fragment } from 'react';

const ListOffices = ({ offices }) => {
    return (
        <div className="widget widget_table" style={{ overflow: 'auto' }}>
            <div className="title heado">Political Offices List</div>

            <div className="widget_stat widget_stat_table">
                <div style={{ overflow: 'auto' }}>
                    <table style={{ overflow: 'scroll' }}>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Name</th>
                                <th>Type</th>

                            </tr>
                        </thead>


                        {offices && offices.map((office, index) => {
                            return (<Fragment key={office.id}>
                                <tbody id="officeContainer">
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{office.name}</td>
                                        <td>{office.type}</td>
                                    </tr>
                                </tbody>
                            </Fragment>);
                        })}


                    </table>
                </div>
            </div>
        </div>
    );
};

export default ListOffices;
