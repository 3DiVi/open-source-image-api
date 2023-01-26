# About project

The Open Source Image API is a repository that contains examples of using the 3DiVi Image API.

3DiVi Image API recognizes faces and silhouettes, detects persons' gender, age, emotional state, checks for liveness, estimates image quality, determines face tilt angle and position in a frame, mask presence and eyelid position (open/closed eyes), and provides face matching.

## 3DiVi Image API Features

- Face detection
- Body detection
- Determination of anthropometric points and angles of rotation of the head
- Age determination
- Gender determination
- Determination of the emotions experienced by the face
- Determination of the presence of a mask
- Assessment of liveliness
- Getting a biometric template
- Verification 1:1
- Image quality assessment

## List of current examples:

- Image quality assessment

# How to start

1. Clone the repository or download it as an archive and unpack it
2. Being in the main folder (by default open-source-image-api), run the command `npm run btsp`. This command is an alias and performs two functions. The first is the installation of dependencies for projects, the second is the assembly of shared components in a shared project so that common parts can be used in projects.
3. Go to the project you want to run. For example: `cd projects/demo-quality-assessment`
4. If you have the Image API deployed on your server, then set the proxy value in the package.json, otherwise leave the default value.
5. Start the project using the `npm start` command
