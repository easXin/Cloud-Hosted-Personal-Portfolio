# Cloud-Hosted Personal Portfolio

This is my personal developer portfolio site, built to showcase my software engineering experience, technical skills, selected projects, resume, and contact information.

The frontend is built with React, TypeScript, and Vite. The site is deployed on AWS using S3 and CloudFront, with a custom domain and HTTPS support. I also added a serverless contact form backed by API Gateway, Lambda, DynamoDB, and SES.

## Live Demo

[Link](https://easxin.dev)

## Why I Built This

I wanted a portfolio that was more than a static resume page. The goal was to build and deploy a small but realistic cloud-hosted web application that includes frontend structure, cloud hosting, HTTPS, custom domain setup, and a working backend contact flow.

The site highlights my experience with full-stack development, .NET-related enterprise work, React/TypeScript UI development, SQL/data-access work, and cloud/serverless deployment concepts.

## Tech Stack

# Frontend
- React
- TypeScript
- Vite
- HTML
- CSS

# Cloud / Backend
- AWS S3
- Amazon CloudFront
- AWS Certificate Manager
- API Gateway
- AWS Lambda
- DynamoDB
- Amazon SES
- Cloudflare DNS

## Features

- Responsive single-page portfolio layout
- Custom dark technical theme
- Section-based navigation with clean routing behavior
- Introduction, skills, work experience, projects, and contact sections
- Resume PDF link
- LinkedIn and GitHub links
- Custom 404 page
- CloudFront SPA fallback support for direct URL refreshes
- Serverless contact form
- Contact message storage in DynamoDB
- Email notifications through Amazon SES
- Basic abuse protection with validation, honeypot field, CORS configuration, and DynamoDB-based rate limiting

## Cloud Deployment

The frontend is built with Vite and deployed as static files to S3. CloudFront serves the site as the CDN layer and handles HTTPS traffic for the custom domain.

The contact form is handled separately through a serverless backend:
                                            
React Contact Form -> API Gateway -> Lambda ->  DynamoDB + SES Email Service Provider                                

Lambda validates the submitted form data, applies basic rate limiting, stores the message in DynamoDB, and sends an email notification through SES.

## Project Structure
src/
  components/
    layout/
    sections/
    icons/
  data/
  hooks/
  styles/
public/
  resume and static assets

The content is organized through typed data files so the UI components stay reusable and easier to maintain.

1. Build the project with Vite
2. Upload the generated `dist` files to AWS S3
3. Serve the site through CloudFront
4. Configure HTTPS with AWS Certificate Manager
5. Connect a custom domain through Route 53

## What I Practiced

- Building a production-ready React/TypeScript frontend
- Splitting UI into reusable components
- Managing typed project and profile data
- Deploying a static frontend to AWS S3 and CloudFront
- Configuring HTTPS and a custom domain
- Building a small serverless backend with API Gateway and Lambda
- Storing contact submissions in DynamoDB
- Sending email notifications with SES
- Handling CORS, validation, honeypot filtering, and basic rate limiting

## Author

**EasXin**
GitHub: [easXin](https://github.com/easXin)