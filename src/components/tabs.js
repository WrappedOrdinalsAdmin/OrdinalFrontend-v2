import React, { useState } from "react";
import { Tab, Tabs, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import auction from "../../src/assets/E-Auction.jpg";
import filter from "../../src/assets/Filter.png";

function TabsDiv() {
    const [activeTab, setActiveTab] = useState("all");

    const handleTabSelect = (tabName) => {
        setActiveTab(tabName);
    };

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-4 d-flex align-items-center justify-content-between">
                    <Tabs className="tabs-wrpao" activeKey={activeTab} onSelect={(tabName) => handleTabSelect(tabName)}>
                        <Tab eventKey="all" title="All">
                        </Tab>
                        <Tab eventKey="arts" title="Arts">
                        </Tab>
                        <Tab eventKey="photography" title="photography">
                        </Tab>
                        <Tab eventKey="music" title="music">
                        </Tab>
                        <Tab eventKey="games" title="games">
                        </Tab>
                        <Tab eventKey="memes" title="memes">
                        </Tab>
                    </Tabs>
                    <button className="filter me-0">Filter & Sort <img alt="filter" src={filter} /></button>
                </div>
            </div>

            {activeTab === "all" && (
                <Row className="mt-4">
                    <Col md={6} lg={4}  className="mb-5 mb-lg-0">
                        <div class="nft-1">
                            <div class="wrap">
                                <h3 class="gradient-text">Inscription</h3>
                            </div>
                            <div className='auctionImg'>
                                <img class="image-placeholder" alt="" src={auction} />
                            </div>
                            <div class="profile5">
                                <img class="profile-img" alt="" src={auction} />
                                <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                            </div>
                            <div class="bid-heading">
                                <b class="good-times text-white">Current Bid :</b>
                                <b class="good-times text-white">Ends in :</b>
                            </div>
                            <div class="end-in">
                                <b class="eth">0.4435 ETH</b>
                                <b class="h-12m-32s">10h 12m 32s</b>
                            </div>
                            <div class="button22">
                                <div class="large5 good-times">Place bid</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}  className="mb-5 mb-lg-0" mb-5 mb-lg-0>
                        <div class="nft-1">
                            <div class="wrap">
                                <h3 class="gradient-text">Inscription</h3>
                            </div>
                            <div className='auctionImg'>
                                <img class="image-placeholder" alt="" src={auction} />
                            </div>
                            <div class="profile5">
                                <img class="profile-img" alt="" src={auction} />
                                <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                            </div>
                            <div class="bid-heading">
                                <b class="good-times text-white">Current Bid :</b>
                                <b class="good-times text-white">Ends in :</b>
                            </div>
                            <div class="end-in">
                                <b class="eth">0.4435 ETH</b>
                                <b class="h-12m-32s">10h 12m 32s</b>
                            </div>
                            <div class="button22">
                                <div class="large5 good-times">Place bid</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}  className="mb-5 mb-lg-0" mb-5 mb-lg-0>
                        <div class="nft-1">
                            <div class="wrap">
                                <h3 class="gradient-text">Inscription</h3>
                            </div>
                            <div className='auctionImg'>
                                <img class="image-placeholder" alt="" src={auction} />
                            </div>
                            <div class="profile5">
                                <img class="profile-img" alt="" src={auction} />
                                <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                            </div>
                            <div class="bid-heading">
                                <b class="good-times text-white">Current Bid :</b>
                                <b class="good-times text-white">Ends in :</b>
                            </div>
                            <div class="end-in">
                                <b class="eth">0.4435 ETH</b>
                                <b class="h-12m-32s">10h 12m 32s</b>
                            </div>
                            <div class="button22">
                                <div class="large5 good-times">Place bid</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            )}

            {activeTab === "arts" && (
                <Row className="mt-4">
                    <Col md={6} lg={4}  className="mb-5 mb-lg-0" mb-5 mb-lg-0>
                        <div class="nft-1">
                            <div class="wrap">
                                <h3 class="gradient-text">Inscription</h3>
                            </div>
                            <div className='auctionImg'>
                                <img class="image-placeholder" alt="" src={auction} />
                            </div>
                            <div class="profile5">
                                <img class="profile-img" alt="" src={auction} />
                                <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                            </div>
                            <div class="bid-heading">
                                <b class="good-times text-white">Current Bid :</b>
                                <b class="good-times text-white">Ends in :</b>
                            </div>
                            <div class="end-in">
                                <b class="eth">0.4435 ETH</b>
                                <b class="h-12m-32s">10h 12m 32s</b>
                            </div>
                            <div class="button22">
                                <div class="large5 good-times">Place bid</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}  className="mb-5 mb-lg-0" mb-5 mb-lg-0>
                        <div class="nft-1">
                            <div class="wrap">
                                <h3 class="gradient-text">Inscription</h3>
                            </div>
                            <div className='auctionImg'>
                                <img class="image-placeholder" alt="" src={auction} />
                            </div>
                            <div class="profile5">
                                <img class="profile-img" alt="" src={auction} />
                                <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                            </div>
                            <div class="bid-heading">
                                <b class="good-times text-white">Current Bid :</b>
                                <b class="good-times text-white">Ends in :</b>
                            </div>
                            <div class="end-in">
                                <b class="eth">0.4435 ETH</b>
                                <b class="h-12m-32s">10h 12m 32s</b>
                            </div>
                            <div class="button22">
                                <div class="large5 good-times">Place bid</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            )}
            {activeTab === "music" && (
                <Row className="mt-4">
                    <Col md={6} lg={4}  className="mb-5 mb-lg-0" mb-5 mb-lg-0>
                        <div class="nft-1">
                            <div class="wrap">
                                <h3 class="gradient-text">Inscription</h3>
                            </div>
                            <div className='auctionImg'>
                                <img class="image-placeholder" alt="" src={auction} />
                            </div>
                            <div class="profile5">
                                <img class="profile-img" alt="" src={auction} />
                                <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                            </div>
                            <div class="bid-heading">
                                <b class="good-times text-white">Current Bid :</b>
                                <b class="good-times text-white">Ends in :</b>
                            </div>
                            <div class="end-in">
                                <b class="eth">0.4435 ETH</b>
                                <b class="h-12m-32s">10h 12m 32s</b>
                            </div>
                            <div class="button22">
                                <div class="large5 good-times">Place bid</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}  className="mb-5 mb-lg-0" mb-5 mb-lg-0>
                        <div class="nft-1">
                            <div class="wrap">
                                <h3 class="gradient-text">Inscription</h3>
                            </div>
                            <div className='auctionImg'>
                                <img class="image-placeholder" alt="" src={auction} />
                            </div>
                            <div class="profile5">
                                <img class="profile-img" alt="" src={auction} />
                                <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                            </div>
                            <div class="bid-heading">
                                <b class="good-times text-white">Current Bid :</b>
                                <b class="good-times text-white">Ends in :</b>
                            </div>
                            <div class="end-in">
                                <b class="eth">0.4435 ETH</b>
                                <b class="h-12m-32s">10h 12m 32s</b>
                            </div>
                            <div class="button22">
                                <div class="large5 good-times">Place bid</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}  className="mb-5 mb-lg-0" mb-5 mb-lg-0>
                        <div class="nft-1">
                            <div class="wrap">
                                <h3 class="gradient-text">Inscription</h3>
                            </div>
                            <div className='auctionImg'>
                                <img class="image-placeholder" alt="" src={auction} />
                            </div>
                            <div class="profile5">
                                <img class="profile-img" alt="" src={auction} />
                                <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                            </div>
                            <div class="bid-heading">
                                <b class="good-times text-white">Current Bid :</b>
                                <b class="good-times text-white">Ends in :</b>
                            </div>
                            <div class="end-in">
                                <b class="eth">0.4435 ETH</b>
                                <b class="h-12m-32s">10h 12m 32s</b>
                            </div>
                            <div class="button22">
                                <div class="large5 good-times">Place bid</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            )}
            {activeTab === "games" && (
                <Row className="mt-4">
                    <Col md={6} lg={4}  className="mb-5 mb-lg-0" mb-5 mb-lg-0>
                        <div class="nft-1">
                            <div class="wrap">
                                <h3 class="gradient-text">Inscription</h3>
                            </div>
                            <div className='auctionImg'>
                                <img class="image-placeholder" alt="" src={auction} />
                            </div>
                            <div class="profile5">
                                <img class="profile-img" alt="" src={auction} />
                                <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                            </div>
                            <div class="bid-heading">
                                <b class="good-times text-white">Current Bid :</b>
                                <b class="good-times text-white">Ends in :</b>
                            </div>
                            <div class="end-in">
                                <b class="eth">0.4435 ETH</b>
                                <b class="h-12m-32s">10h 12m 32s</b>
                            </div>
                            <div class="button22">
                                <div class="large5 good-times">Place bid</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}  className="mb-5 mb-lg-0" mb-5 mb-lg-0>
                        <div class="nft-1">
                            <div class="wrap">
                                <h3 class="gradient-text">Inscription</h3>
                            </div>
                            <div className='auctionImg'>
                                <img class="image-placeholder" alt="" src={auction} />
                            </div>
                            <div class="profile5">
                                <img class="profile-img" alt="" src={auction} />
                                <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                            </div>
                            <div class="bid-heading">
                                <b class="good-times text-white">Current Bid :</b>
                                <b class="good-times text-white">Ends in :</b>
                            </div>
                            <div class="end-in">
                                <b class="eth">0.4435 ETH</b>
                                <b class="h-12m-32s">10h 12m 32s</b>
                            </div>
                            <div class="button22">
                                <div class="large5 good-times">Place bid</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}  className="mb-5 mb-lg-0" mb-5 mb-lg-0>
                        <div class="nft-1">
                            <div class="wrap">
                                <h3 class="gradient-text">Inscription</h3>
                            </div>
                            <div className='auctionImg'>
                                <img class="image-placeholder" alt="" src={auction} />
                            </div>
                            <div class="profile5">
                                <img class="profile-img" alt="" src={auction} />
                                <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                            </div>
                            <div class="bid-heading">
                                <b class="good-times text-white">Current Bid :</b>
                                <b class="good-times text-white">Ends in :</b>
                            </div>
                            <div class="end-in">
                                <b class="eth">0.4435 ETH</b>
                                <b class="h-12m-32s">10h 12m 32s</b>
                            </div>
                            <div class="button22">
                                <div class="large5 good-times">Place bid</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            )}
            {activeTab === "memes" && (
                <Row className="mt-4">
                    <Col md={6} lg={4}  className="mb-5 mb-lg-0" mb-5 mb-lg-0>
                        <div class="nft-1">
                            <div class="wrap">
                                <h3 class="gradient-text">Inscription</h3>
                            </div>
                            <div className='auctionImg'>
                                <img class="image-placeholder" alt="" src={auction} />
                            </div>
                            <div class="profile5">
                                <img class="profile-img" alt="" src={auction} />
                                <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                            </div>
                            <div class="bid-heading">
                                <b class="good-times text-white">Current Bid :</b>
                                <b class="good-times text-white">Ends in :</b>
                            </div>
                            <div class="end-in">
                                <b class="eth">0.4435 ETH</b>
                                <b class="h-12m-32s">10h 12m 32s</b>
                            </div>
                            <div class="button22">
                                <div class="large5 good-times">Place bid</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}  className="mb-5 mb-lg-0" mb-5 mb-lg-0>
                        <div class="nft-1">
                            <div class="wrap">
                                <h3 class="gradient-text">Inscription</h3>
                            </div>
                            <div className='auctionImg'>
                                <img class="image-placeholder" alt="" src={auction} />
                            </div>
                            <div class="profile5">
                                <img class="profile-img" alt="" src={auction} />
                                <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                            </div>
                            <div class="bid-heading">
                                <b class="good-times text-white">Current Bid :</b>
                                <b class="good-times text-white">Ends in :</b>
                            </div>
                            <div class="end-in">
                                <b class="eth">0.4435 ETH</b>
                                <b class="h-12m-32s">10h 12m 32s</b>
                            </div>
                            <div class="button22">
                                <div class="large5 good-times">Place bid</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}  className="mb-5 mb-lg-0" mb-5 mb-lg-0>
                        <div class="nft-1">
                            <div class="wrap">
                                <h3 class="gradient-text">Inscription</h3>
                            </div>
                            <div className='auctionImg'>
                                <img class="image-placeholder" alt="" src={auction} />
                            </div>
                            <div class="profile5">
                                <img class="profile-img" alt="" src={auction} />
                                <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                            </div>
                            <div class="bid-heading">
                                <b class="good-times text-white">Current Bid :</b>
                                <b class="good-times text-white">Ends in :</b>
                            </div>
                            <div class="end-in">
                                <b class="eth">0.4435 ETH</b>
                                <b class="h-12m-32s">10h 12m 32s</b>
                            </div>
                            <div class="button22">
                                <div class="large5 good-times">Place bid</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            )}
            {activeTab === "photography" && (
                <Row className="mt-4">
                    <Col md={6} lg={4}  className="mb-5 mb-lg-0" mb-5 mb-lg-0>
                        <div class="nft-1">
                            <div class="wrap">
                                <h3 class="gradient-text">Inscription</h3>
                            </div>
                            <div className='auctionImg'>
                                <img class="image-placeholder" alt="" src={auction} />
                            </div>
                            <div class="profile5">
                                <img class="profile-img" alt="" src={auction} />
                                <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                            </div>
                            <div class="bid-heading">
                                <b class="good-times text-white">Current Bid :</b>
                                <b class="good-times text-white">Ends in :</b>
                            </div>
                            <div class="end-in">
                                <b class="eth">0.4435 ETH</b>
                                <b class="h-12m-32s">10h 12m 32s</b>
                            </div>
                            <div class="button22">
                                <div class="large5 good-times">Place bid</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}  className="mb-5 mb-lg-0" mb-5 mb-lg-0>
                        <div class="nft-1">
                            <div class="wrap">
                                <h3 class="gradient-text">Inscription</h3>
                            </div>
                            <div className='auctionImg'>
                                <img class="image-placeholder" alt="" src={auction} />
                            </div>
                            <div class="profile5">
                                <img class="profile-img" alt="" src={auction} />
                                <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                            </div>
                            <div class="bid-heading">
                                <b class="good-times text-white">Current Bid :</b>
                                <b class="good-times text-white">Ends in :</b>
                            </div>
                            <div class="end-in">
                                <b class="eth">0.4435 ETH</b>
                                <b class="h-12m-32s">10h 12m 32s</b>
                            </div>
                            <div class="button22">
                                <div class="large5 good-times">Place bid</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}  className="mb-5 mb-lg-0" mb-5 mb-lg-0>
                        <div class="nft-1">
                            <div class="wrap">
                                <h3 class="gradient-text">Inscription</h3>
                            </div>
                            <div className='auctionImg'>
                                <img class="image-placeholder" alt="" src={auction} />
                            </div>
                            <div class="profile5">
                                <img class="profile-img" alt="" src={auction} />
                                <b class="cameron-williamson6 text-white">Cameron Williamson</b>
                            </div>
                            <div class="bid-heading">
                                <b class="good-times text-white">Current Bid :</b>
                                <b class="good-times text-white">Ends in :</b>
                            </div>
                            <div class="end-in">
                                <b class="eth">0.4435 ETH</b>
                                <b class="h-12m-32s">10h 12m 32s</b>
                            </div>
                            <div class="button22">
                                <div class="large5 good-times">Place bid</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            )}
        </div>
    )
}
export default TabsDiv;

