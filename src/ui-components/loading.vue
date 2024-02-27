<template>
    <!-- bootstrap spinner -->
    <div class="loading">
        <div class="spinner-border" role="status">
            <span class="sr-only"></span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Loading',
}
</script>
<style>
    .loading{
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        margin: auto;
        background-color: transparent;
        transform: translate(100%,100%);
        border-radius: 50%;
        border-top:5px solid #fff;
        border-left:5px solid #fff;
        animation: spinner 1s linear infinite;
    }
    .loading .spinner-border{
        width: 5rem;
        height: 5rem;
        border-left: var(--primary);
        border-right: var(--primary);
    }
    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>