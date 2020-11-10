/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Layout, Table } from 'antd'
// import styles from './styles.module.css'
// eslint-disable-next-line no-unused-vars
import { ColumnType, TableProps } from 'antd/lib/table'

export interface Props<Record> {
  label: string
  data: Record[]
  headers: { [key: string]: string }
  // selectable?: boolean
}

function DataGrid<Record extends { id: any }>({
  label: headerText,
  data,
  headers
}: Props<Record>) {
  const [selected, setSelected] = useState([] as any[])

  const columns = Object.entries(headers).map(([dataIndex, headerTitle]) => {
    return { dataIndex, title: headerTitle }
  }) as ColumnType<Record>[]

  const tableProps: TableProps<Record> = {
    dataSource: data,
    columns
  }

  return (
    <Layout>
      {headerText && (
        <Layout.Header
          style={{
            fontSize: '18px',
            background: 'mediumturquoise',
            color: 'white',
            fontWeight: 'bolder'
          }}
        >
          {headerText}
        </Layout.Header>
      )}
      <Layout.Content>
        <Table<Record>
          size='small'
          rowKey='id'
          {...tableProps}
          rowSelection={{
            selectedRowKeys: selected,
            onChange: setSelected
          }}
        />
      </Layout.Content>
      Selected: {selected.join(', ')}
    </Layout>
  )
}

export { DataGrid }
