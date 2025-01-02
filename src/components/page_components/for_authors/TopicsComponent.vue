<template>
  <div>
    <section class="speciality-area">
      <div class="container">
        <h3>Topics :</h3>
        <div class="row justify-content-between">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <h6>ENGINEERING</h6>
            <p v-for="topics in engineering" :key="topics">{{ topics }}</p>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <h6>TECHNOLOGY</h6>
            <p v-for="topics in techmology" :key="topics">{{ topics }}</p>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <h6>SCIENCES</h6>
            <p v-for="topics in science" :key="topics">{{ topics }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      engineering: [
        "Acoustical Engineering	",
        "Aeronautical Engineering	",
        "Irrigation Engineering	",
        "Agricultural Engineering	",
        "Applied Engineering	",
        "Architecture & Planning",
        "Architecture Engineering	",
        "Audio Engineering",
        "Automation And Robotics Engineering",
        "Automobile Engineering",
        "Bio Engineering",
        "Biochemical Engineering",
        "Biomedical Engineering",
        "Bio-molecular Engineering",
        "Building And Construction Engineering",
        "Ceramic Engineering",
        "Chassis Engineering",
        "Chemical Engineering",
        "Civil Engineering",
        "Computer Engineering",
        "Corrosion Engineering",
        "Electrical Engineering",
        "Electronics Engineering",
        "Energy Engineering",
        "Engineering Chemistry",
        "Engineering Management",
        "Engineering Mathematics",
      ],
      techmology: [
        "Bio Technology",
        "Ceramic Technology",
        "Construction Technology And Management",
        "Dairy Technology",
        "Electronics And Media Technology",
        "Product Design Technology",
        "Fashion Technology",
        "Fiber Technology",
        "Food Technology",
        "Forensic Science And Technology",
        "Information And Communication Technology",
        "Information Technology",
        "Instrumentation Technology",
        "Leather Technology",
        "Materials Science And Technology",
        "Oil And Paint Technology",
        "Paint Technology",
        "Pharmaceutical Technology",
        "Polymer Technology",
        "Packaging Technology",
        "Printing Technology",
        "Pulp And Paper Technology",
        "Rubber Technology",
        "Silk Technology",
        "Sugar Technology",
        "Textile Technology",
        "Nanotechnology",
      ],
      science: [
        "Engineering Sciences",
        "Computer Science",
        "Material Sciences",
        "Biochemistry",
        "Cryogenics",
        "Seismology",
        "Aeronautics",
        "Polymer Science",
        "Information Science",
      ],
    };
  },
};
</script>

<style scopes>
h6 {
  font-family: "Rubik", sans-serif;
}
p {
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  color: rgb(100, 117, 137);
}

h3 {
  font-family: "Rubik", sans-serif;
  padding-bottom: 20px;
  font-size: 24px;
}
</style>