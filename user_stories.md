# User Stories

- signup
- login
- full CRUD for poems
- users who haven't signed up can:
  - view poems
- user must be logged in to:
  - create/update/delete
- view poems by category(filter by category)

- when user navigates to site option to login/signup
- once logged in, what will a user see
  - see all that users poems
    - links to 'show' pages for each poem
      - where we can update/delete
- navbar with user signed out
  - All Poems
    - index of all poems
  - Signup/Login
    - forms to signup or login
- navbar with user signed in
  - All Poems
    - index of all poems
  - Home
    - index of all current users poems
    - crud is accessible from here
  - New Poem
    - form for new poem
  - Logout
    - clear session

## What do we need to view an index of all poems?

## Frontend

- poems container -> renders all of our poems
- poem component -> responsible for formatting display of individual poem
- fetch all poems
- state to save all the poems

## Backend

- endpoint for poems index -> get '/poems'
- index controller action in poems controller
- poem model/table
- have poem serializer include user info

# Signup

# Frontend

- signup component with form (username, password, password confirmation)
- on form submit sends post fetch request to '/users'

# Backend

- request is directed to users controller create action
- create user
- create session
- send back user info
