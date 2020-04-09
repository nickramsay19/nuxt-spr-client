<template>
    <div id="account">
        <b-row>
            <b-col cols="3">
                <b-nav vertical>
                    <b-nav-item disabled><strong>Your account</strong></b-nav-item>
                    <b-nav-item to="/account">Profile</b-nav-item>
                    <b-nav-item to="/account/friends">Friends</b-nav-item>
                    <b-nav-item to="/account/account-settings">Account settings</b-nav-item>
                </b-nav>
            </b-col>
            </b-col>
                <nuxt-child style="width: 70%;"></nuxt-child>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {}
</script>

<style></style>
