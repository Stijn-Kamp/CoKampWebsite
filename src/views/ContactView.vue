<script>
import EmailIcon from "@components/icons/IconEmail.vue";
import PhoneIcon from "@components/icons/IconPhone.vue";
import AddressIcon from "@components/icons/IconAddress.vue";

export default {
  components: {
    EmailIcon,
    PhoneIcon,
    AddressIcon,
  },
};
</script>

<template>
  <div class="contact text-center bg-light bg-primary text-white py-5">
    <h1>Contact</h1>
    <p>
      Voor al uw vragen kunt u contact met ons opnemen via onderstaande
      gegevens.
    </p>
    <div class="d-flex justify-content-around pt-5">
      <div class="text-center">
        <AddressIcon class="icon" />
        <div>
          <p>Raadhuisstraat 9</p>
          <p>1687 AH</p>
          <p>Wognum</p>
        </div>
      </div>
      <div class="text-center">
        <PhoneIcon class="icon" />
        <div>
          <p><a class="link" href="tel:+31613654646">+31 (0)6 136 546 46</a></p>
          <p><a class="link" href="tel:0229573470">0229 573 470</a></p>
        </div>
      </div>
      <div class="text-center">
        <EmailIcon class="icon" />
        <div>
          <p>
            <a class="link" href="mailto:cokamp@gmail.com">CoKamp@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.contact {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.icon {
  width: 75px;
  height: 75px;
  margin: 15px;
  fill: white;
}

.link {
  color: white;
}
</style>
