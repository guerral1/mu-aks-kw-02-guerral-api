# pull official base image
FROM endorsed-docker.artifactory.platform.manulife.io/ets-node:22-debian12-latest

#set node env as PRODUCTION
ENV NODE_ENV=production

# set working directory
WORKDIR /home/mfc

# copy .npmrc to get npm packages from Manulife Artifactory
COPY --chown=mfc:mfc .npmrc ./

# copy package.json and package-lock.json to get dependencies
COPY --chown=mfc:mfc package*.json ./

USER root

# install npm dependencies except dev dependencies
RUN npm ci --omit=dev

# clean up the npmrc file
RUN rm .npmrc

# copy source files
COPY --chown=mfc:mfc src ./src

#Run the process as mfc 
USER mfc 

# describe that the container is listening on port 3001
EXPOSE 3001

# start container with npm run start
CMD [ "npm", "run", "start" ]