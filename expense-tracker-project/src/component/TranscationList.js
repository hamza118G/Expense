import React from 'react'
import {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import { Transaction } from './Transaction'
export const TranscationList = () => {
    const {transactions} = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <ul className='list'>
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} /> ))}
            </ul>
        </div>
    )
}

export default TranscationList