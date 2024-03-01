'use server'

// signin and signout actions

import * as auth from '@/auth';

export async function signIn() {
    return auth.signIn('github');

}

