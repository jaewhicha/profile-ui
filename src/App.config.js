const env = process.env.REACT_APP_DEPLOY_ENV
const contactApiPath = `/v1/contact`
const contentApiPath = `/v1/content`

const getLocalVars = (ENV_LOCAL = {}) => {
    ENV_LOCAL.DEPLOY_ENV = `local`
    ENV_LOCAL.API_HOST = `localhost`
    ENV_LOCAL.API_PORT = `:5000`
    ENV_LOCAL.PROTOCOL = `http://`
    ENV_LOCAL.CONTACT_API_PATH = contactApiPath
    ENV_LOCAL.CONTENT_API_PATH = contentApiPath
    ENV_LOCAL.DOMAIN = `${ENV_LOCAL.PROTOCOL}${ENV_LOCAL.API_HOST}${ENV_LOCAL.API_PORT}`

    return ENV_LOCAL
}

const getTestVars = (ENV_TEST = {}) => {
    ENV_TEST.DEPLOY_ENV = `test`
    ENV_TEST.API_HOST = `localhost`
    ENV_TEST.API_PORT = `:5000`
    ENV_TEST.PROTOCOL = `http://`
    ENV_TEST.CONTACT_API_PATH = contactApiPath
    ENV_TEST.CONTENT_API_PATH = contentApiPath
    ENV_TEST.DOMAIN = `${ENV_TEST.PROTOCOL}${ENV_TEST.API_HOST}${ENV_TEST.API_PORT}`

    return ENV_TEST
}

const getStageVars = (ENV_STAGE = {}) => {
    ENV_STAGE.DEPLOY_ENV = `stage`
    ENV_STAGE.API_HOST = `staging.api.jaywitcher.com`
    ENV_STAGE.API_PORT = ``
    ENV_STAGE.PROTOCOL = `https://`
    ENV_STAGE.CONTACT_API_PATH = contactApiPath
    ENV_STAGE.CONTENT_API_PATH = contentApiPath
    ENV_STAGE.DOMAIN = `${ENV_STAGE.PROTOCOL}${ENV_STAGE.API_HOST}${ENV_STAGE.API_PORT}`

    return ENV_STAGE
}

const getProdVars = (ENV_PROD = {}) => {
    ENV_PROD.DEPLOY_ENV = `prod`
    ENV_PROD.API_HOST = `api.jaywitcher.com`
    ENV_PROD.API_PORT = ``
    ENV_PROD.PROTOCOL = `https://`
    ENV_PROD.CONTACT_API_PATH = contactApiPath
    ENV_PROD.CONTENT_API_PATH = contentApiPath
    ENV_PROD.DOMAIN = `${ENV_PROD.PROTOCOL}${ENV_PROD.API_HOST}${ENV_PROD.API_PORT}`

    return ENV_PROD
}

const getEnvironmentVariables = {
	'local': getLocalVars,
	'test': getTestVars,
	'stage': getStageVars,
	'prod': getProdVars
};

module.exports = getEnvironmentVariables[env]();