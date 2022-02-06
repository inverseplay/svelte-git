import {commit} from './commit'
import {clone} from './clone'
import { rebase } from './rebase'
import { cherrypick } from './cherrypick'
import { reflog } from './reflog'


export let git = {
commit,clone,rebase,cherrypick,reflog
}