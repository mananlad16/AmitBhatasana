import React from 'react'

const Header = () => {
  return (
   
    <div>
    <div className="preloader d-none ">
        <div className="preloader_image" />
    </div>
    {/* search modal */}
    <div className="modal" tabIndex={-1} role="dialog" aria-labelledby="search_modal" id="search_modal">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">×</span>
        </button>
        <div className="widget widget_search">
        <form method="get" className="sea rchform search-form" action="https://html.modernwebtemplates.com/">
            <div className="form-group">
            <input type="text" defaultValue name="search" className="form-control" placeholder="Search keyword" id="modal-search-input" />
            </div>
            <button type="submit" className="btn">Search</button>
        </form>
        </div>
    </div>
    {/* Unyson messages modal */}
    <div className="modal fade" tabIndex={-1} role="dialog" id="messages_modal">
        <div className="fw-messages-wrap ds p-normal">
        {/* Uncomment this UL with LI to show messages in modal popup to your user: */}
        {/*
            <ul class="list-unstyled">
                <li>Message To User</li>
            </ul>
            */}
        </div>
    </div>{/* eof .modal */}
    {/* wrappers for visual page editor and boxed version of template */}

    </div>

  )
}

export default Header
