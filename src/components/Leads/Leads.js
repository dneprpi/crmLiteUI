import React, { Component } from 'react';
import { paginationLead } from '../../requests';
import Pagination from '../Pagination';
import LeadsList from './LeadsList';

window.React = React;

class Leads extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1,
            countItems: 10,
            pageLimit: 2,
            leadsList: []
        }
    }

    componentDidMount() {
        this.getPaginationData(this.state.currentPage);
        this.createItemCountList();
    }

    async getPaginationData(currentPage) {
        const paginationData = await paginationLead({ currentPage });
        
        this.setState({
            leadsList: await paginationData.data.items, 
            countItems: await paginationData.data.countItems,
            pageLimit: await paginationData.data.pageLimit
        });
    }

    createItemCountList() {
       const list = [];

       for(let i = 1; i <= this.state.countItems; i++) {
           list.push(i)
       }

       return list;
    }
    
    buttonClick = target => {
        this.getPaginationData(target.dataset.currentpage)
        console.log(this)
    }

    render() {
        return (
            <Pagination 
                itemsperpage={ this.state.pageLimit }
                nocolumns={ null }
                items={ this.createItemCountList() }
                pagesspan={ 6 }
                buttonClickHandler={ this.buttonClick }>
                <LeadsList leadsList={ this.state.leadsList }/>
            </Pagination>
        )
    }
}

export default Leads;