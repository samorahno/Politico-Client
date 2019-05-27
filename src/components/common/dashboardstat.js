import React from 'react';

const DashboardStatComponent = ({ count, title }) => {
    return (
        <div className="widget">
            <div className="title heado">{title}</div>
            <div className="widget_stat">
                <div className="widget_stat1">
                    <i className="fa  fa-check-circle-o" />
                </div>
                <div className="widget_stat2">
                    {count}
                </div>
            </div>
        </div>
    );
};

export default DashboardStatComponent;
