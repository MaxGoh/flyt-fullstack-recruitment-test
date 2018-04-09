#### How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I roughly spent 10-15 hours on this project. The tedious part was especially in utilising TypeScript to ensure all components of the project are Type-Safed.
I did not focus on the animation part as seen on [Website](https://order.gbk.co.uk/), as well as not cloning the design to an exact T. My focus on this application was to ensure scalable, minimal bug, reusable components within the minimal time that I spent.

I'm pretty proud of what I have built within this time. If I had more time, I would skin up the UI/UX so that it would be more user-friendly. For example, when adding or removing items, I would add some sort of loading and success animation for indication that the functions are being processed. Also, I would add Unit Testing to ensure higher quality code.

#### How would you improve the Flyt APIs that you just used?

There are a few "improvement" (What I think personally) that can be done.

1. Changing from passing accessToken from query params to header, like this `Authorization: ${accessToken}`
2. From what I have retrieved, `menusAvailable: [1469]` should be returned as `menusAvailable: 1469` instead. It's just a waste of developer's time to extract out a single value.

#### Additional Comment

From my personal perspective, a Full-stack Engineer is someone who understands and develop on both ends in the system architecture, from development to deployment.

This was a great mini-project, It's great for testing Front-end Engineers. However, as an applicant, I would say that this is not a good test to test for Full-stack engineers as I built this webapp purely working on the client side.

Perhaps, for future tests. Flyt can request a mini-portion of building some RESTful APIs on their own using certain frameworks, as well as requiring them to deploy to a Linux server for DevOps skillsets.


Thank You.