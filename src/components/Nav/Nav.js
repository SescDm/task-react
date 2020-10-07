import React from 'react';
import universal from './Nav.module.css'
import {NavLink} from "react-router-dom";
import "../../css/all.min.css"

const Nav = (props) => {
	let friendsData = props.state.messangerPage.dialogData;
	let photoUlr = 'data:image/jpeg;base64,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';



					 /*let friendsData = store.getState().sideBar.friends.map(x => {
						 return <Friend friend={x.name} />
					 });*/


					 return (
						  <nav className={universal.nav}>
							  <div className={universal.post}>
								  <NavLink to="/profile" activeClassName={universal.active}>
									  <i className="fas fa-address-card"></i>Profile</NavLink>
							  </div>
							  <div className={universal.post}>
								  <NavLink to="/dialogs" activeClassName={universal.active}>
									  <i className="fas fa-envelope"></i>Messanger</NavLink>
							  </div>
							  <div className={universal.post}>
								  <NavLink to="/news" activeClassName={universal.active}>
									  <i className="fas fa-newspaper"></i>News</NavLink>
							  </div>
							  <div className={universal.post}>
								  <NavLink to="/music" activeClassName={universal.active}>
									  <i className="fas fa-music"></i>Music</NavLink>
							  </div>
							  <div className={universal.post}>
								  <NavLink to="/settings" activeClassName={universal.active}>
									  <i className="fas fa-tools"></i>Settings</NavLink>
							  </div>
							  <div className={universal.post}>
								  <NavLink to="/users" activeClassName={universal.active}>
									  <i className="fas fa-users"></i>Friends</NavLink>
							  </div>


							  <div className={universal.blockFriend}>
								  <div className={universal.bestFriend}>
									  <div className={universal.photo}><img src={photoUlr}></img></div>
									  <div className={universal.friend}>{friendsData[0].name}</div>
								  </div>
								  <div className={universal.bestFriend}>
									  <div className={universal.photo}><img src={photoUlr}></img></div>
									  <div className={universal.friend}>{friendsData[1].name}</div>
								  </div>
								  <div className={universal.bestFriend}>
									  <div className={universal.photo}><img src={photoUlr}></img></div>
									  <div className={universal.friend}>{friendsData[2].name}</div>
								  </div>
							  </div>


						  </nav>
	);
}
export default Nav;