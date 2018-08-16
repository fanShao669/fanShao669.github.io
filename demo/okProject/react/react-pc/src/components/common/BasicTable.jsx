/**
 * Created by yanji on 2018/8/16.
 */
import { Table } from 'antd';

import React, { Component } from 'react'

export default class BasicTable extends Component {
    state = {
        local: {
            emptyText: '暂无数据'
        },
    }
    /**
     * 
     * @changeTable
     * @param p pagination
     * @param f filters
     * @param s sorter
     * @memberof BasicTable
     */
    opChageTable=(p,f,s)=>{
        const {changeTable} = this.props; // 上级目录中传入需要执行的函数
        changeTable(p,f,s)
    }
    render() {
        // 使用案例
        // 参数说明 expandIconColumnIndex,展开按钮的索引
        // 常用属性 rowSelection,根据需要自行加入。
        //const { dataSource, loading=true, columns, expandIconColumnIndex=-1, rowSelection={} } = this.props;
        
        const { 
            rowKey="id", 
            expandIconColumnIndex=0, 
            pagination ={ 
                pageSize:10,
            }
        } = this.props;

        console.log(this.props)

        return (
        <div>
            <Table {...this.props} local ={this.state.local} onChange ={this.opChageTable} pagination={pagination} rowKey={rowKey} expandIconColumnIndex={expandIconColumnIndex}/>
        </div>
        )
    }
}


