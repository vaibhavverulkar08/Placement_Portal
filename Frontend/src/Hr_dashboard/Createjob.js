import React from 'react';
import 'boxicons';
import './createJob.css';


export const Createjob = () => {


    
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

                    <h1 className='heading' >Job Post</h1>
                    <div className='profile'><box-icon type='solid' name='user' color='#000000' size='80px' ></box-icon></div>

                </section>

                <section className='form'>

<form class="row g-3">
    <div class="col-md-6">
        <label for="inputEmail4" class="form-label"  >Post Name</label>
        <input type="email" class="form-control" id="inputEmail4" placeholder="Post Name"/>
    </div>
    <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Company Name</label>
        <input type="text" class="form-control" placeholder="Company Name Ex:-Infosys" />
    </div>
    <div class="col-md-5">
        <label for="inputAddress" class="form-label">Location</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Company Address"/>
    </div>
    <div class="col-md-3">
        <label for="inputAddress2" class="form-label">Package (CTC)</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="7 LPA"/>
    </div>

    <div class="col-md-4">
        <label for="inputState" class="form-label">Experience</label>
        <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>Internship (1-2 months)</option>
            <option>Internship (2-6 months)</option>
            <option>Internship (6-9 months)</option>
            <option>Internship (9-12 months)</option>
            <option>Internship (above 12 months)</option>
        </select>
    </div>
    
    <div class="col-md-6">
        <label for="inputCity" class="form-label">Education</label>
        <input type="text" class="form-control" id="inputCity" placeholder=" Any Graduate/BE/B.Tech/BSC"/>
    </div>
    <div class="col-md-5">
        <label for="inputState" class="form-label">Job Type</label>
        <select id="inputState" class="form-select">
            <option selected>Full TIme</option>
            <option>Part Time</option>
            <option>Hybrid</option>
            <option>Remote</option>
            <option>WFM</option>
        </select>
    </div>
    <div class="col-md-12">
        <label for="inputZip" class="form-label">Skill</label>
        <input type="text" class="form-control" id="inputZip" placeholder="C / C++ / Java / Python"/>
    </div>

    <div class="col-md-12">
        <label for="inputZip" class="form-label">Discription</label>
        <input type="text" class="form-control" id="inputZip" placeholder="Explain In brief About Jop"/>
    </div>
   
    <div class="col-12">
        <button type="submit" class="btn btn-primary">Create</button>
    </div>
</form>







</section>



            </section>


            






        </div>



    )
}
