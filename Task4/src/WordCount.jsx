export default function WordCount(){
    const para="There are more than 7,500 cultivars of apples. Different cultivars are bred for various tastes and uses, including cooking, eating raw, and cider or apple juice production. Trees and fruit are prone to fungal, bacterial, and pest problems, which can be controlled by a number of organic and non-organic means. In 2010, the fruit's genome was sequenced as part of research on disease control and selective breeding in apple production"
    const total=para.split(" ").length;
    return(
        <>
          <p>Total no. words: {total}</p>
        </>
    )
}