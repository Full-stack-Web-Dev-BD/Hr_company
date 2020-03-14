import React, { useState } from 'react';
import {  } from 'reactstrap';
import classnames from 'classnames';

import {
  TabContent, 
  TabPane, 
  Nav, 
  NavItem, 
  NavLink, 
  Row, 
  Col
} from "reactstrap";

import Client from './Client'
import Employee from './Employee'
import Shift from './Shift'

const Add =(props)=> {
    
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
    return (
      <>
        <div className="content">
          <Row>
            <div>
            <Nav tabs>
                <NavItem style={{cursor:"pointer"}}>
                <NavLink
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => { toggle('1'); }}
                >
                <span style={{color:"white", cursor:"pointer"}}> CLIENT</span>
                </NavLink>
                </NavItem>
                <NavItem style={{cursor:"pointer"}}>
                  <NavLink
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => { toggle('2'); }}
                    >
                    <span style={{color:"white"}}>EMPLOYEE</span>
                  </NavLink>
                </NavItem>
                <NavItem style={{cursor:"pointer"}}>
                  <NavLink
                      className={classnames({ active: activeTab === '3' })}
                      onClick={() => { toggle('3'); }}
                    >
                    <span style={{color:"white"}}>SHIFT</span>
                  </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <Client/>
                        </Col>
                    </Row>          
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                      <Col sm="12">
                        <Employee/>
                      </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                      <Col sm="12">
                        <Shift/>
                      </Col>
                    </Row>
                </TabPane>
            </TabContent>
            </div>
          </Row>
        </div>
      </>
    );
}

export default Add;
