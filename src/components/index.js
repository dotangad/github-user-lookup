import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  background: white;
  height: 70px;
  width: 100%;
  box-shadow: 0px 3px 3px 2px rgba(0, 0, 0, 0.09);
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`

export const Box = styled.div`
  width: 30%;
  padding: 50px;
  background: white;
  border: 2px solid #efefef;
  border-radius: 1px;
  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.07);
  margin: 30px 0;
`
const UserameBox = styled.input`
  width: 70%;
  font-size: 1rem;
  padding: 7px 15px;
  border: 2px solid #eee;
  margin-bottom: 20px;
`

const SearchButton = styled.button`
  width: 70%;
  font-size: 1rem;
  padding: 7px 15px;
  border: 2px solid #2977fa;
  background: #2977f5;
  text-align: center;
  color: white;
  cursor: pointer;
`

export const Search = ({ onChange, onClick }) => (
  <Box
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <UserameBox
      type="text"
      className="usernamebox"
      placeholder="Enter username"
      onChange={onChange}
    />
    <SearchButton className="searchbtn" onClick={onClick}>
      Search
    </SearchButton>
  </Box>
)

export const Header = () => (
  <header>
    <Nav>
      <img
        alt="gh"
        src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
        style={{ height: '80%', width: 'auto' }}
      />
    </Nav>
  </header>
)

const Avatar = styled.img`
  height: 150px;
  width: 150px;
  border: none;
  border-radius: 100px;
  margin-bottom: 30px;
`

const UserFullname = styled.a`
  color: black;
  font-size: 22px;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 15px;
`

export const Repository = ({ repo }) => (
  <Box
    style={{ cursor: 'pointer' }}
    onClick={() => (window.location.href = repo.html_url)}
  >
    <div style={{ fontSize: '18px', marginBottom: '10px' }}>
      {repo.full_name}
    </div>
    <div style={{ marginBottom: '10px' }}>{repo.description}</div>
    <div>
      <span style={{ marginRight: '20px' }}>
        <i className="fas fa-star" /> {repo.stargazers_count}
      </span>
      <span style={{ marginRight: '20px' }}>
        <i className="fas fa-eye" /> {repo.watchers_count}
      </span>
      <span>
        <i className="fas fa-code-branch" /> {repo.forks}
      </span>
    </div>
  </Box>
)

export const UserInfo = ({ user }) => (
  <Box
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <Avatar src={user.avatar_url} />
    <UserFullname target="__blank" href={user.html_url}>
      {user.name}
    </UserFullname>
    {/* <p>User ID: {user.id}</p> */}
    <div>
      <center>
        <i>"{user.bio}"</i>
      </center>
    </div>
  </Box>
)
