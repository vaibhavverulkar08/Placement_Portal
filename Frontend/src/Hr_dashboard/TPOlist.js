import React from 'react';
import 'boxicons';
import './tpolist.css';
import Table from 'react-bootstrap/Table';


export const TPOlist = () => {
    return (
        <div className='maindiv'>

            <section className='sbar'>
                <div className='div1' >
                    <div className='icon' >
                        <img id="logo" src="logo.jpg" alt="Logo" />
                    </div>


                    <div className='hv'>

                        <div className='icon1'   >
                            <box-icon name='dashboard' type='solid' size='lg' rotate='90' color='#fffbfb'   ></box-icon>

                        </div>
                        <p className='dash' style={{ color: "white" }}>Dashboard</p>
                    </div>



                    <div className='hv'>
                        <box-icon name='layout' size='lg' color='#fffbfb' ></box-icon>
                        <br />

                        <div className='cntr'>

                            <p className='dash' style={{ color: "white" }}>Jobs</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sectn'>
                <section className='nevbar'>

                    <h1 className='heading' >HR DASHBOARD</h1>
                    <div className='profile'><box-icon type='solid' name='user' color='#000000' size='80px' ></box-icon></div>

                </section>
                
                <section>
                  <div className='tpolist'>

                    <div className='TPO_List'>
                        TPO List
                    </div>
                  </div>
                </section>

                <section>
 <Table striped bordered hover variant="" className='tablelist'>
      <thead>
        <tr>
          <th>SR No</th>
          <th>Collage Name</th>
          <th>TPO Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>G. H. Raisoni College of Engineering</td>
          <td>Otto</td>
          <td>
            <div className='send'>
            <button className='btn' onclick="sendMessage()">Send</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Priyadarshini Bhagwati College of Engineering</td>
          <td>Thornton</td>
          <td>
            <div className='send'>
            <button className='btn' onclick="sendMessage()">Send</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Priyadarshini Indira Gandhi College Of Engineering</td>
          <td>Larry the Bird</td>
          <td>

            <div className='send'>
            <button className='btn' onclick="sendMessage()">Send</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>J D College Of Engineering & Management</td>
          <td>Larry the Bird</td>
          <td>

            <div className='send'>
            <button className='btn' onclick="sendMessage()">Send</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Computer Science & Engineering Department, YCCE</td>
          <td>Larry the Bird</td>
          <td>

            <div className='send'>
            <button className='btn' onclick="sendMessage()">Send</button>
            </div>
          </td>
        </tr>
      </tbody>
    </Table>

                </section>


            </section>

        </div>
    )
}

export default TPOlist;

