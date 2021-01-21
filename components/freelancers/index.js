import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useTable from "./useTable";
import { Button, Toolbar, Paper, TableBody, TableRow, TableCell, InputAdornment, TextField, IconButton, FormControl } from '@material-ui/core';
import styles from './freelancer.module.css'
import ClipLoader from "react-spinners/ClipLoader";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const headCells = [
    { id: 'name', label: 'Name', disableSorting: true },
    { id: 'skills', label: 'Skills', disableSorting: true },
    { id: 'title', label: 'Title', disableSorting: true },
    { id: 'experience', label: 'Experience', disableSorting: true },
    { id: 'industry', label: 'Industry', disableSorting: true },
    { id: 'phone', label: 'Phone', disableSorting: true },
    { id: 'skype', label: 'Skype', disableSorting: true },
    { id: 'whatsapp', label: 'Whatsapp', disableSorting: true },
    { id: 'facebook', label: 'Facebook', disableSorting: true },
    { id: 'linkedin', label: 'Linkedin', disableSorting: true },
    { id: 'email', label: 'Email', disableSorting: true },
    { id: 'gender', label: 'Gender', disableSorting: true },
    { id: 'location', label: 'Location', disableSorting: true },
    { id: 'actions', label: 'Actions', disableSorting: true }
]

const divisions = [
    { value: "barisal", label: "Barisal" },
    { value: "chittagong", label: "Chittagong" },
    { value: "dhaka", label: "Dhaka" },
    { value: "khulna", label: "Khulna" },
    { value: "mymensingh", label: "Mymensingh" },
    { value: "rajshahi", label: "Rajshahi" },
    { value: "rangpur", label: "Rangpur" },
    { value: "sylhet", label: "Sylhet" },
]

const design = [
    { value: "ui-ux-designer", label: "UI UX designer" },
    { value: "facebook-cover-designer", label: "Facebook cover designer" },
    { value: "logo-designer", label: "Logo designer" },
    { value: "motion-designer", label: "Motion designer" },
    { value: "book-cover-designer", label: "Book cover designer" },
    { value: "interior-designer", label: "Interior designer" },
    { value: "cliping-path", label: "Cliping path" },
    { value: "photo-retouching", label: "Photo retouching" },
    { value: "photo-editing", label: "Photo editing" },
    { value: "visiting-card-designer", label: "Visiting card designer" },
    { value: "web-banner-designer", label: "Web banner designer" },
    { value: "flyer-designer", label: "Flyer designer" },
    { value: "cv-designer", label: "CV designer" },
]
const development = [
    { value: "html-developer", label: 'Html developer' },
    { value: "php-developer", label: "Php developer" },
    { value: "nodejs-developer", label: "Node js developer" },
    { value: "python-developer", label: "Python developer" },
    { value: "asp-dot-net-developer", label: "ASP.NET developer" },
    { value: "ruby-rails-developer", label: "Ruby Rails developer" },
    { value: "dart-developer", label: "Dart developer" },
    { value: "IOS-developer", label: "IOS developer" },
    { value: "android-developer", label: "Android developer" },
    { value: "native-app-developer", label: "Native App developer" },
]
const marketing = [
    { value: "backlink-expert", label: "Backlink Expert" },
    { value: "content-writter", label: "Content writter" },
    { value: "on-page-expert", label: "On page expert" },
    { value: "off-page-expert", label: "Off page expert" },
    { value: "email-marketer", label: "Email marketer" },
    { value: "offline-marketer", label: "Offline marketer" },
    { value: "local-media-buyer", label: "Local media buyer" },
    { value: "data-entry", label: "Data entry" },
    { value: "lead-generation", label: "Lead generation" },
    { value: "web-research", label: "Web research" },
]
function Freelancers() {
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false);

    const [search, setSearch] = useState('')

    const [industry, setIndustry] = useState('')
    const [title, setTitle] = useState('')
    const [titleOptions, setTitleOptions] = useState(null)
    const [experience, setExperience] = useState('')
    const [gender, setGender] = useState('')
    const [location, setLocation] = useState('')


    const [selectedFreelancer, setSelectedFreelancer] = useState(null)


    const [records, setRecords] = useState([])
    const [recordsAll, setRecordsAll] = useState([])
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleClose = () => setShow(false);
    const handleShow = (freelancer) => {
        setSelectedFreelancer(freelancer)
        setShow(true);
    }

    useEffect(() => {
        setLoading(true)
        axios.get('/freelancer/getall')
            .then(res => {
                setLoading(false)
                setRecords(res.data.freelancers)
                setRecordsAll(res.data.freelancers)
            })
            .catch(err => {
                setLoading(false)
                err && err.response && alert(err.response.data.error)
            })
    }, [])

    const getExperience = (lvl) => {
        if (!lvl) {
            return '-'
        } else if (lvl === "level-1") {
            return '>1 years'
        } else if (lvl === "level-2") {
            return '1-5 years'
        } else if (lvl === "level-3") {
            return '5-10 years'
        } else if (lvl === "level-4") {
            return '10+ years'
        }
    }


    const getTitle = (title) => {
        if (!title) {
            return '-'
        }

        let filteredDev = development.filter(x => x.value === title)
        let filteredMark = marketing.filter(x => x.value === title)
        let filteredDes = design.filter(x => x.value === title)

        return filteredDev[0]?.label || filteredMark[0]?.label || filteredDes[0]?.label
    }
    useEffect(() => {
        setTitle('')

        if (industry) {
            if (industry === 'marketing') {
                setTitleOptions(marketing)
            } else if (industry === 'development') {
                setTitleOptions(development)
            } else if (industry === 'design') {
                setTitleOptions(design)
            } else {
                setTitleOptions(null)
            }
        }
        else {
            setTitleOptions(null)
        }

    }, [industry])



    const handleSearch = () => {


        if (search === '' && industry == '' && title == '' && experience == '' && gender == '' && location == '') {
            return setRecords(recordsAll)
        } else {
            let filtered = recordsAll.filter(x =>
                (x.name.toLowerCase().includes(search) ||
                    x.contacts.phone.includes(search) ||
                    x.contacts.whatsapp.includes(search) ||
                    x.contacts.email.includes(search) ||
                    x.contacts.skype.includes(search) ||
                    x.contacts.facebook.includes(search) ||
                    x.contacts.linkedin.includes(search)) &&
                (
                    x.title.includes(title) &&
                    x.industry.includes(industry) &&
                    x.experience.includes(experience) &&
                    x.gender.includes(gender) &&
                    x.location.includes(location)
                )
            )
            setRecords(filtered)
        }
    }

    return (
        <section className="works-area ptb-80">
            <div className="container" >
                <div className={styles.searchContainer}>
                    <div className={styles.search}>
                        <div class="input-group mb-3">
                            <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" class="form-control" placeholder="Search By Name, phone, email, whatsapp, facebook, skype, linkedin" />
                            <button onClick={() => handleSearch()} className={`input-group-text ${styles.searchbtn}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg></button>
                        </div>
                    </div>
                    <div className={styles.filter}>
                        <select onChange={(e) => setIndustry(e.target.value)} className="form-control" aria-label="Default select example">
                            <option value='' selected>Select Industry</option>
                            <option value="design">Design</option>
                            <option value="development">Development</option>
                            <option value="marketing">Marketing</option>
                        </select>
                        <select onChange={(e) => setTitle(e.target.value)} className="form-control" aria-label="Default select example">
                            <option value='' selected>Select Title</option>
                            {
                                titleOptions && titleOptions.map((opt, index) => {
                                    return (
                                        <option key={index} value={opt.value}>{opt.label}</option>
                                    )
                                })
                            }

                        </select>
                        <select onChange={(e) => setExperience(e.target.value)} className="form-control" aria-label="Default select example">
                            <option value='' selected>Select Experience</option>
                            <option value='level-1'>{'>1'} years</option>
                            <option value='level-2'>1-5 years</option>
                            <option value='level-3'>5-10 years</option>
                            <option value='level-4'>10+ years</option>
                        </select>
                        <select onChange={(e) => setGender(e.target.value)} className="form-control" aria-label="Default select example">
                            <option value='' selected>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <select onChange={(e) => setLocation(e.target.value)} className="form-control" aria-label="Default select example">
                            <option value='' selected>Select Location</option>
                            {
                                divisions.map((opt, index) => {
                                    return (
                                        <option key={index} value={opt.value}>{opt.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div style={{ overflow: "auto" }}>
                    <TblContainer>
                        {
                            loading ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}><ClipLoader size={80} /></div> :
                                recordsAfterPagingAndSorting().length > 0 ?
                                    <><TblHead />

                                        <TableBody>
                                            {

                                                recordsAfterPagingAndSorting().map((item, index) =>
                                                (<TableRow key={item._id}>
                                                    <TableCell>{item.name}</TableCell>
                                                    <TableCell>{item.skills || "-"}</TableCell>
                                                    <TableCell>{getTitle(item.title)}</TableCell>
                                                    <TableCell>{getExperience(item.experience)}</TableCell>
                                                    <TableCell>{item.industry || "-"}</TableCell>
                                                    <TableCell>{item.contacts.phone || "-"}</TableCell>
                                                    <TableCell>{item.contacts.skype || "-"}</TableCell>
                                                    <TableCell>{item.contacts.whatsapp || '-'}</TableCell>
                                                    <TableCell>{item.contacts.facebook || '-'}</TableCell>
                                                    <TableCell>{item.contacts.linkedin || '-'}</TableCell>
                                                    <TableCell>{item.contacts.email || '-'}</TableCell>
                                                    <TableCell>{item.gender || '-'}</TableCell>
                                                    <TableCell>{item.location || '-'}</TableCell>


                                                    <TableCell>
                                                        <div style={{ display: "flex" }}>
                                                            <span style={{ cursor: "pointer" }} onClick={() => handleShow(item)}>view more</span>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>)
                                                )

                                            }
                                        </TableBody>
                                    </> : <><TblHead /><caption>No freelancers found</caption></>
                        }


                    </TblContainer>

                </div>
                <TblPagination />
            </div>





            <Dialog
                open={show}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

                maxWidth='lg'

            >
                <div className={styles.modalHeader}>
                    <h5>Freelancer Details</h5>
                    <span style={{ cursor: "pointer" }} onClick={() => handleClose()} className='close'>x</span>
                </div>
                <DialogContent>
                    <div style={{ width: "70vw" }}>
                        <div className='row' >
                            <div className='col-md-3'>
                                <img className={styles.avatar} src={selectedFreelancer && selectedFreelancer.profile ? selectedFreelancer.profile : "https://www.auramarine.com/wp-content/uploads/2018/03/man-placeholder-e1520494457998.png"}></img>
                            </div>
                            <div className='col-md-9'>
                                <div >
                                    <table className={styles.infoTable}>
                                        <tr>
                                            <td><span>Name</span></td>
                                            <td><p className='ml-1'><span className='mr-1'>:</span>{selectedFreelancer && selectedFreelancer.name}</p></td>
                                        </tr>
                                        <tr>
                                            <td><span>Skills</span></td>
                                            <td><p className='ml-1'><span className='mr-1'>:</span>{selectedFreelancer && selectedFreelancer.skills}</p></td>
                                        </tr>
                                        <tr>
                                            <td><span>Title</span></td>
                                            <td><p className='ml-1'><span className='mr-1'>:</span>{selectedFreelancer && getTitle(selectedFreelancer.title)}</p></td>
                                        </tr>
                                        <tr>
                                            <td><span>Experience</span></td>
                                            <td><p className='ml-1'><span className='mr-1'>:</span>{selectedFreelancer && getExperience(selectedFreelancer.experience)}</p></td>
                                        </tr>
                                        <tr>
                                            <td><span>Industry</span></td>
                                            <td><p className='ml-1'><span className='mr-1'>:</span>{selectedFreelancer && selectedFreelancer.industry}</p></td>
                                        </tr>
                                    </table>

                                    <button className={styles.pdfBtn}>
                                        DOWNLOAD AS PDF
                                    </button>
                                </div>
                            </div>
                        </div>

                        <label className={styles.subHeading}>Communication Details</label>
                        <div className='row my-2'>
                            <div className='col-md-6'>
                                <tr>
                                    <td><span>Phone</span></td>
                                    <td><p className='ml-1'><span className='mr-1'>:</span>{selectedFreelancer && selectedFreelancer.contacts.name || "N/A"}</p></td>
                                </tr>
                                <tr>
                                    <td><span>Skype</span></td>
                                    <td><p className='ml-1'><span className='mr-1'>:</span>{selectedFreelancer && selectedFreelancer.contacts.skype || "N/A"}</p></td>
                                </tr>
                                <tr>
                                    <td><span>Whatsapp</span></td>
                                    <td><p className='ml-1'><span className='mr-1'>:</span>{selectedFreelancer && selectedFreelancer.contacts.whatsapp || "N/A"}</p></td>
                                </tr>
                            </div>
                            <div className='col-md-6'>
                                <tr>
                                    <td><span>Facebook</span></td>
                                    <td><p className='ml-1'><span className='mr-1'>:</span>{selectedFreelancer && selectedFreelancer.contacts.facebook || "N/A"}</p></td>
                                </tr>
                                <tr>
                                    <td><span>Linkedin</span></td>
                                    <td><p className='ml-1'><span className='mr-1'>:</span>{selectedFreelancer && selectedFreelancer.contacts.linkedin || "N/A"}</p></td>
                                </tr>
                                <tr>
                                    <td><span>Email</span></td>
                                    <td><p className='ml-1'><span className='mr-1'>:</span>{selectedFreelancer && selectedFreelancer.contacts.email || "N/A"}</p></td>
                                </tr>
                            </div>
                        </div>

                        <label className={styles.subHeading}>Portfolios</label>
                        <div>
                            {
                                selectedFreelancer && selectedFreelancer.portfolios.map((port, index) => {
                                   if(port.siteName == '') return
                                return (
                                        <div className={styles.singlePortfolio}>
                                            <div className={styles.index}><span className={styles.portfolioIndex}>0{index+1}</span></div>
                                            <div>
                                                <tr>
                                                    <td><span>Site Name</span></td>
                                                    <td><p className='ml-1'><span className='mr-1'>:</span>{port.siteName}</p></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Site Type</span></td>
                                                    <td><p className='ml-1'><span className='mr-1'>:</span>{port.siteType}</p></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Site Link</span></td>
                                                    <td><p className='ml-1'><span className='mr-1'>:</span>{port.siteLink}</p></td>
                                                </tr>
                                            </div>
                                        </div>
                                    )
                                })
                            }



                        </div>
                    </div>
                </DialogContent>

            </Dialog>
        </section>
    )
}

export default Freelancers
