import React from 'react';
import {Table,Button} from 'antd'
import {Data,Columns} from './data';

const Banana:React.FC=()=>{
    return(
        <div className='banana-box'>
            <Button type='primary' className='add'>新增品类</Button>
            <Table 
                dataSource={Data}
                columns={Columns}
            >
            </Table>
            
        </div>
    )
}

export default Banana;