<template>
  <!-- Contact Form -->
            <div class="contact-form-area wow animate__animated animate__fadeIn">
                <h2>Leave a message</h2>
                <div class="row">
                    <form action="#">
                        <div class="col-md-4">
                            <input type="text" placeholder="Your Name">
                        </div>
                        <div class="col-md-4">
                            <input type="email" placeholder="Your Email">
                        </div>
                        <div class="col-md-4">
                            <input type="text" placeholder="Subject">
                        </div>
                        <div class="col-12">
                            <textarea placeholder="Your Message"></textarea>
                            <input class="large-blue-button" type="submit" value="Send Message">
                        </div>
                    </form>
                </div>
            </div>
</template>

<script>

export default {
  name: "ContactForm"
};

</script>

<style scoped>
</style>
