import React from 'react';
import { FaQuestionCircle, FaLock, FaListUl, FaExclamationTriangle } from 'react-icons/fa';

const CompanyDocumentation = () => {
    return (
        <div className=''>

            <div className='bg-white rounded-md' style={{ padding: '20px', borderBottom: '1px dashed #ddd' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <FaQuestionCircle style={{ marginRight: '10px', color: '#3498db' }} />
                    <h2 style={{ margin: 0, fontSize: '1.5em' }}>FAQ</h2>
                </div>
                {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                        <p style={{ margin: 0 }}>How do I regenerate my API key?</p>
                        <span style={{ color: '#999' }}>&gt;</span>
                    </div>
                ))}
            </div>
            
            <div className='rounded-md bg-white mt-7' style={{ padding: '20px' }}>
                <h2 style={{ margin: 0, marginBottom: '15px', fontSize: '1.5em' }}>API Documentation</h2>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <FaLock style={{ marginRight: '10px', color: '#27ae60' }} />
                        <p style={{ margin: 0 }}>Authentication</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <FaListUl style={{ marginRight: '10px', color: '#8e44ad' }} />
                        <p style={{ margin: 0 }}>Endpoints</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <FaExclamationTriangle style={{ marginRight: '10px', color: '#e74c3c' }} />
                        <p style={{ margin: 0 }}>Error Codes and Troubleshooting</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyDocumentation;